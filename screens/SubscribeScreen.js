import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { ValidateEmail } from "../utils";
const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState("");
  const [enableButton, setEnableButton] = React.useState(false);
  const handleSubscribe = () => {
    if (ValidateEmail(email)) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
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
        onChangeText={(text) => {
          onChangeEmail(text);
          handleSubscribe();
        }}
        placeholder="Type your email"
        keyboardType="email-address"
      />
      <Pressable
        style={[styles.button, enableButton ? {} : styles.disabledButton]}
        onPress={() => {
          if (enableButton) {
            Alert.alert("Thanks for subscribing, stay tuned!");
          }
        }}
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
  disabledButton: {
    backgroundColor: "#888888",
  },
  buttonText: {
    color: "white",
  },
});
export default SubscribeScreen;
