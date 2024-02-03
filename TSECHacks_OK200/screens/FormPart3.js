import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const inputWidth = screenWidth - 24;

const countries = ["India"];
const allIndianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const maharashtraDistricts = ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"]; // Hardcoded districts for Maharashtra

export default function FormInput3({ navigation, route }) {
  const { formData } = route.params;
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedDistrict, setSelectedDistrict] = React.useState("");
  const [stateSuggestions, setStateSuggestions] = React.useState([]);
  const [districtSuggestions, setDistrictSuggestions] = React.useState([]);

  const filterStates = (input) => {
    const filteredStates = allIndianStates.filter((state) =>
      state.toLowerCase().includes(input.toLowerCase())
    );
    setStateSuggestions(filteredStates);
  };

  const filterDistricts = (input) => {
    const filteredDistricts = maharashtraDistricts.filter((district) =>
      district.toLowerCase().includes(input.toLowerCase())
    );
    setDistrictSuggestions(filteredDistricts);
  };

  return (
    <View style={FormInput3Styles.container}>
      <View style={FormInput3Styles.header}>
        <MaterialCommunityIcons
          name="numeric-3-circle-outline"
          size={40}
          color="#F18C8E"
        />
        <Text style={FormInput3Styles.headerText}>Location Details</Text>
        <Text style={FormInput3Styles.infoText}>
          Kindly enter the location for fund allocation
        </Text>
      </View>
      <Picker
        style={FormInput3Styles.input}
        selectedValue={selectedCountry}
        onValueChange={(value) => setSelectedCountry(value)}
      >
        {countries.map((country, index) => (
          <Picker.Item key={index} label={country} value={country} />
        ))}
      </Picker>
      <Picker
        style={FormInput3Styles.input}
        selectedValue={selectedState}
        onValueChange={(value) => {
          setSelectedState(value);
          filterStates(value);
        }}
      >
        {allIndianStates.map((state, index) => (
          <Picker.Item key={index} label={state} value={state} />
        ))}
      </Picker>
      <Picker
        style={FormInput3Styles.input}
        selectedValue={selectedDistrict}
        onValueChange={(value) => {
          setSelectedDistrict(value);
          filterDistricts(value);
        }}
      >
        {maharashtraDistricts.map((district, index) => (
          <Picker.Item key={index} label={district} value={district} />
        ))}
      </Picker>

      <Pressable
        style={FormInput3Styles.button}
        onPress={() => {
          const updatedFormData = {
            ...formData, // Include the data from the previous forms
            selectedCountry,
            selectedState,
            selectedDistrict,
          };

          navigation.navigate("Eligibility", { formData: updatedFormData });
        }}
      >
        <Text style={FormInput3Styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const FormInput3Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8EDE3",
  },
  header: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#305F72",
  },
  infoText: {
    fontSize: 16,
    color: "black",
  },
  input: {
    width: inputWidth,
    height: 45,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F5F5F5",
    borderColor: "#305F72",
    fontSize: 14,
  },
  button: {
    width: 150,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#F18C8E",
    borderColor: "#F18C8E",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
