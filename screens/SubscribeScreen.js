import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState("");
  const handleSubscribe = () => {
    if (ValidateEmail(email)) {
      navigation.navigate("Subscribe");
    }s
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.messageText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Type your email"
        keyboardType="email-address"
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputBox: {
    height: 40,
    width: 325,
    paddingLeft: 5,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 16,
    marginTop: 20,
  },
  messageText: {
    fontSize: 22,
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
    height: 40,
    width: 325,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364741",
    margin: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});
export default SubscribeScreen;
