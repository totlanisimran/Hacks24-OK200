import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>IMPACT-CONNECT</Text>
      <Image
        style={styles.imageStyle}
        source={require("../assets/csrLogo.jpg.png")}
      ></Image>
      <Text style={styles.infoText}>
        ImpactConnect brings to you a platform for streamlined and efficient CSR
        cause selection and fund allocations.
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.button1,
          {
            backgroundColor: pressed ? "#990000" : "#F18C8E",
          },
        ]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8EDE3",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 60,
    color: "#305F72",
  },
  infoText: {
    fontSize: 16,
    color: "black",
    textAlign: "justify",
  },
  button1: {
    marginTop: 30,
    borderRadius: 100,
    height: 50,
    width: 150,
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
  },
  buttonText: {
    color: "#fff",
  },
  imageStyle: {
    height: 300,
    marginBottom: 30,
    resizeMode: "contain",
  },
});

export default Welcome;
