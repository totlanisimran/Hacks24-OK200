import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
// import { useCompany } from "../context/CompanyContext";

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  //   const { companyName } = useCompany();
  const companyName = "company123";
  const ngoName = "ngo456";

  const fetchMessages = async () => {
    try {
      //   console.log(companyName.trim());
      //   console.log(companyName);
      const response = await axios.get(
        `http://192.168.137.165:5000/api/chat/conversation/${companyName}/${ngoName}`
      );
      console.log(response.data);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [inputMessage]);

  const sendMessage = async () => {
    try {
      const newMessage = {
        sender: companyName,
        receiver: ngoName,
        content: inputMessage,
        timestamp: new Date().toISOString(),
      };
      console.log(newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      await axios.post("http://192.168.137.165:5000/api/chat/send", newMessage);
      setInputMessage("");
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Chat with {ngoName}
          </Text>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.timestamp.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems:
                    item.sender === companyName ? "flex-end" : "flex-start",
                  margin: 5,
                }}
              >
                <Text
                  style={{
                    backgroundColor:
                      item.sender === companyName ? "#DCF8C6" : "#ECECEC",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  {item.content}
                </Text>
              </View>
            )}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
                margin: 5,
              }}
              placeholder="Type your message"
              value={inputMessage}
              onChangeText={(text) => setInputMessage(text)}
            />
            <Button title="Send" onPress={sendMessage} />
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default ChatScreen;
