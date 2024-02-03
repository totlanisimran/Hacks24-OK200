import React, { useState, useEffect, useCallback } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import ngoData from "../utils/ngoData";
import { useCompany } from "../context/CompanyContext";
const NgosListScreen = ({ navigation }) => {
  const [fetchedNgos, setFetchedNgos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { companyName } = useCompany();
  useEffect(() => {
    console.log(companyName + "comp");
    fetchNgosFromBackend();
  }, []);
  //   const onRefresh = useCallback(() => {
  //     setRefreshing(true);
  //     // Fetch data from the backend or perform any refreshing logic
  //     fetchNgosFromBackend();
  //   }, []);
  const fetchNgosFromBackend = async () => {
    const backendNgos = await getNgosFromBackend();
    setFetchedNgos(backendNgos);
  };
  const getNgosFromBackend = async () => {
    try {
      const response = await fetch(
        `http://192.168.137.181:5000/api/List/ngo/${companyName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch NGOs from the backend");
      }

      const data = await response.json();
      console.log(data);
      return data.selectedNgos;
    } catch (error) {
      console.error("Error fetching NGOs from the backend:", error);
      return [];
    }
  };

  const getMatchingNgos = () => {
    return ngoData.filter((ngo) => fetchedNgos.includes(ngo.ngoName));
  };

  const renderNgoItem = ({ item }) => {
    return (
      <View style={styles.ngoItem}>
        <Text style={styles.ngoName}>{item.ngoName}</Text>
        <Text style={styles.ngoSectors}>
          Sectors: {item.sectorsOfOperation.join(", ")}
        </Text>
        {/* <Button
          
          title="View Details"
          
        /> */}
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            console.log(item.ngoName + "jij");
            navigation.navigate("ReportList", { ngoName: item.ngoName });
          }}
        >
          <Text>Get Report</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getMatchingNgos()}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderNgoItem}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      />
      <Pressable style={{ marginLeft: "auto", padding: 20 }}>
        <FontAwesome
          name="refresh"
          size={24}
          color="black"
          onPress={fetchNgosFromBackend}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    backgroundColor: "#F8EDE3",
    marginTop: 10,
  },
  ngoItem: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 15,
  },
  ngoName: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    color: "#305F72",
  },
  ngoSectors: {
    fontSize: 14,
    color: "#666",
    padding: 10,
    fontStyle: "italic",
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#F18C8E",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginLeft: "auto",
  },
});

export default NgosListScreen;
