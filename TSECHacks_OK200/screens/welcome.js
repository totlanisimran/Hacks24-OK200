import React from 'react';
import { View, Text, Pressable, Image , StyleSheet} from 'react-native';

const Welcome = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={require("../assets/csrLogo.jpeg")}></Image>
      <Text style={styles.welcomeText}>Welcome to our App!</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button1,
          {
            backgroundColor: pressed ? '#990000' : '#ff0000',
          },
        ]}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 25,
      marginBottom: 60
    },
    button1: {
      marginTop: 30,
      borderRadius: 100,
      height: 50,
      width: 150,
      justifyContent: 'center', // Center text vertically
      alignItems: 'center', // Center text horizontally
    },
    buttonText: {
      color: '#fff',
    },
    imageStyle: {
        height: 300,
        marginBottom: 30
    }
  });

export default Welcome;
