import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import ngoData from "../utils/ngoData";
import { FontAwesome5 } from "@expo/vector-icons";

const DonatedNgoList = ({ navigation }) => {
  const [selectedNgo, setSelectedNgo] = useState(null);

  const openReport = (ngo) => {
    navigation.navigate("ReportListScreen"); // Navigate to the dynamic screen with individual Report data
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => openReport(item)}>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          {/* <FontAwesome5 name="hands-helping" size={22} color="#F18C8E" /> */}
          <Text style={styles.ngoName}>{item.ngoName}</Text>
          <Text style={styles.ngoRegion}>{item.geographicCoverage.region}</Text>
        </View>
        <Text style={styles.ngoSector}>
          Sectors of Operation: {item.sectorsOfOperation}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ngoData}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
      {selectedNgo && <Report route={{ params: { ngo: selectedNgo } }} />}
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
  ngoSector: {
    fontSize: 14,
    color: "#F18C8E",
  },
});

export default DonatedNgoList;
