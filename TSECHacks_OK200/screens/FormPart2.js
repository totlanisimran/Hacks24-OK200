import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const inputWidth = screenWidth - 24;

export default function FormPart2({ navigation, route }) {
  const { formData } = route.params;
  const [coreValues, onChangeCoreValues] = React.useState("");
  const [mission, onChangeMission] = React.useState("");
  const [areasOfInterest, setAreasOfInterest] = React.useState([]);
  const [selectedArea, setSelectedArea] = React.useState("");

  const areasOfInterestOptions = [
    "Heritage Art and Culture",
    "Slum Area Development",
    "Technology",
    "Healthcare",
    "Encouraging Sports",
    "Finance",
    "Prime Ministers Natural Relief Fund",
    "Education",
    "Clean Ganga Fund",
    "Swachh Bharat Kosh",
    "Other",
  ];

  const addAreaOfInterest = () => {
    if (selectedArea && !areasOfInterest.includes(selectedArea)) {
      setAreasOfInterest((prevAreas) => [...prevAreas, selectedArea]);
    }
  };

  return (
    <View style={FormPart2Styles.container}>
      <View style={FormPart2Styles.header}>
        <MaterialCommunityIcons
          name="numeric-2-circle-outline"
          size={40}
          color="#F18C8E"
        />
        <Text style={FormPart2Styles.headerText}>Company Values</Text>
      </View>
      <TextInput
        style={FormPart2Styles.input}
        placeholder="Core Values"
        value={coreValues}
        onChangeText={onChangeCoreValues}
      />
      <TextInput
        style={FormPart2Styles.input}
        placeholder="Mission"
        value={mission}
        onChangeText={onChangeMission}
      />

      <View style={FormPart2Styles.dropdownContainer}>
        <Text style={FormPart2Styles.dropdownLabel}>Areas of Interest</Text>
        <Picker
          selectedValue={selectedArea}
          onValueChange={(itemValue) => setSelectedArea(itemValue)}
          style={FormPart2Styles.dropdown}
        >
          {areasOfInterestOptions.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
        <Pressable
          style={FormPart2Styles.addButton}
          onPress={addAreaOfInterest}
        >
          <Text style={FormPart2Styles.addButtonText}>Add Area</Text>
        </Pressable>
        <Text style={FormPart2Styles.selectedAreasText}>
          Selected Areas of Interest: {areasOfInterest.join(", ")}
        </Text>
      </View>

      <Pressable
        style={FormPart2Styles.button}
        onPress={() => {
          const updatedFormData = {
            ...formData, // Include the data from the previous form
            coreValues,
            mission,
            areasOfInterest,
          };

          navigation.navigate("FormPart3", { formData: updatedFormData });
        }}
      >
        <Text style={FormPart2Styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
}

const FormPart2Styles = StyleSheet.create({
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
  dropdownContainer: {
    width: inputWidth,
    margin: 12,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: "#456268",
  },
  dropdown: {
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    borderColor: "#305F72",
  },
  button: {
    width: 150,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#F18C8E",
    borderColor: "#F18C8E",
    borderWidth: 2,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },

  addButton: {
    marginTop: 8,
    backgroundColor: "#305F72",
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  selectedAreasText: {
    marginTop: 12,
    marginBottom: 25,
    fontSize: 16,
    color: "#305F72",
  },
});
