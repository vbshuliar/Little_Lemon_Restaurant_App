import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Image
          style={styles.image}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.messageText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  message: {
    flex: 1,
    justifyContent: "center",
  },
  messageText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    margin: 50,
  },
  button: {
    backgroundColor: "#364741",
    paddingHorizontal: 125,
    paddingVertical: 10,
    margin: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default WelcomeScreen;
