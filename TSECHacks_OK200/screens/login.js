import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add your authentication logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Posts")}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.text1}>Not a member?</Text>
      <Pressable
        onPress={() => navigation.navigate("FormPart1")}
        style={styles.registerButton}
      >
        <Text style={styles.registerButtonText}>Register with us</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8EDE3",
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 20,
    color: "#305F72",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#305F72",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#F18C8E",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  text1: {
    marginTop: 10,
    marginBottom: 10,
    color: "#305F72",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#F18C8E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
