import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ngoData from "../utils/ngoData";

const NgoList = ({ navigation }) => {
  const [ngoList, setNgoList] = useState([]);

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    // Fetch data from your backend using the provided endpoint
    try {
      const response = await fetch(
        "http://192.168.137.181:5000/api/comp/companyProfile/Jp morgan"
      );
      console.log(response);
      const data = await response.json();

      // Filter NGO data based on selected district and areas of interest
      const filteredNgos = ngoData.filter((ngo) => {
        const matchesRegion =
          ngo.geographicCoverage.region === data.selectedDistrict;
        const matchesInterest = ngo.sectorsOfOperation.some((sector) =>
          data.areasOfInterest.includes(sector)
        );

        return matchesRegion || matchesInterest;
      });

      setNgoList(filteredNgos);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  const openDetailsScreen = (ngo) => {
    navigation.navigate("NgoDetailsScreen", { ngo });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => openDetailsScreen(item)}>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <FontAwesome5 name="hands-helping" size={22} color="#F18C8E" />
          <Text style={styles.ngoName}>{item.ngoName}</Text>
          <Text style={styles.ngoRegion}>{item.geographicCoverage.region}</Text>
        </View>
        <Text style={styles.ngoMission}>{item.missionStatement}</Text>
        <Text style={styles.ngoSector}>
          Sectors of Operation: {item.sectorsOfOperation.join(", ")}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ngoList}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8EDE3",
  },
  postContainer: {
    marginBottom: 16,
    backgroundColor: "#ecf0f1",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  ngoName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#305F72",
  },
  ngoRegion: {
    fontSize: 16,
    color: "#305F72",
  },
  ngoMission: {
    fontSize: 16,
    marginBottom: 8,
  },
  ngoSector: {
    fontSize: 14,
    color: "#F18C8E",
  },
});

export default NgoList;
