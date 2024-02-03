import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCompany } from "../context/CompanyContext";

const NgoDetailsScreen = ({ route }) => {
  const { companyName } = useCompany();

  const { ngo } = route.params;
  const navigation = useNavigation();
  console.log(ngo);
  const addNgoToFav = async (ngos) => {
    const apiUrl = "http://192.168.137.181:5000/api/List/select-ngos";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          selectedNgos: ngos.ngoName,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("NGOs added to favorites successfully:", data);
    } catch (error) {
      console.error("There was an error adding the NGOs to favorites:", error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title and Mission Statement container */}
        <View style={styles.titleContainer}>
          <View style={styles.titleLogo}>
            <Image
              source={{ uri: ngo?.ngoLogo }}
              style={{ height: 80, width: 80, borderRadius: 100 }}
            />
            <Text style={styles.modalTitle}>{ngo.ngoName}</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("ChatScreen", ngo.ngoName)}
            style={{ marginLeft: "auto" }}
          >
            <Ionicons name="chatbubbles-sharp" size={36} color="#305F72" />
          </Pressable>
        </View>
        <Text style={styles.modalTextCenter}>{ngo.missionStatement}</Text>
        {/* Sectors of Operation and Contact Information */}
        <Text style={styles.modalText}>
          Sectors of Operation: {ngo.sectorsOfOperation.join(", ")}
        </Text>

        {/* Success Stories Section */}
        <View style={styles.successStoriesContainer}>
          <Text style={styles.modalTitle}>Success Stories</Text>
          {ngo.successStories.map((story, index) => (
            <View key={index} style={styles.successStoryCard}>
              <Text style={styles.successStoryTitle}>{story.title}</Text>
              <Text style={styles.successStoryContent}>{story.content}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.modalText}>
          Contact Information: {ngo.contactInformation.email},{" "}
          {ngo.contactInformation.phone}
        </Text>

        {/* Close Button */}
        <View style={styles.closeButtonContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.closeButton}>Close</Text>
          </Pressable>
        </View>

        <Pressable
          style={{ marginLeft: "auto", marginTop: 45 }}
          onPress={() => addNgoToFav(ngo)}
        >
          <Feather name="check-circle" size={50} color="#305F72" />
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EDE3",
  },
  scrollContainer: {
    padding: 16,
  },
  titleContainer: {
    marginTop: 14,
    alignItems: "center", // Center title and mission statement
    marginBottom: 16,
    flexDirection: "row",
  },
  titleLogo: {
    flexDirection: "row",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#305F72",
    marginBottom: 15,
    marginLeft: 15,
    marginTop: 15,
  },
  modalTextCenter: {
    fontSize: 16,
    color: "#305F72",
    textAlign: "center", // Center mission statement text
    marginBottom: 16,
    fontStyle: "italic",
    fontWeight: "800",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#305F72",
    textAlign: "left", // Left align sectors and contact info
  },
  successStoriesContainer: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#F18C8E",
    borderRadius: 15,
  },
  successStoryCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  successStoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#305F72",
  },
  successStoryContent: {
    fontSize: 16,
    color: "#305F72",
  },
  closeButtonContainer: {
    alignItems: "center", // Center close button
    marginTop: 20,
  },
  closeButton: {
    fontSize: 18,
    color: "#F18C8E",
  },
});

export default NgoDetailsScreen;
