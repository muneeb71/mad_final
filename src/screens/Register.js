import { View, Text, StyleSheet, ToastAndroid, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

import Icon from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usersList, setUsersList] = useState([]);

  const register = () => {
   
   if (!username || !email || !password || !confirmPassword){
        ToastAndroid.show(
            "Fields Cannot Be Empty",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
        return;
   }
   if (password !== confirmPassword){
    ToastAndroid.show(
        "Passwords Do Not Match",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
    );
    return;
   }
   const exists = usersList.filter((user) => user.email == email)

   if(exists.length != 0){
    ToastAndroid.show(
        "Already Registered",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
    );
    return;
   }
   const data = {
    username: username,
    email: email,
    password: password,
   }
   
   setUsersList([...usersList, data]);
   ToastAndroid.show(
    "Registered!",
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM
    );
    setTimeout(() => {
        navigation.navigate("Login", {user: data});
    }, 2000)
   
  };
  return (
    <View style={styles.parent}>
      <View style={styles.main}>
        <View>
          <Icon name="logo-firebase" size={110} color="#ffa700"></Icon>
        </View>
        <View style={{ marginTop: 12 }}>
          <TextInput
            placeholder="User Name"
            style={styles.input}
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
          />
        </View>
        <View>
          <Button
            title="Login"
            style={styles.Button}
            onPress={() => register()}
          >
            <Text style={styles.text}>Create Account</Text>
          </Button>
          <View style={styles.action}>
            <Text>Already got an account? </Text>
            <Text
              style={{ color: "blue" }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              {" "}
              Login
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = new StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  main: {
    flex: 0.85,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  input: {
    width: 320,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  Button: {
    backgroundColor: "blue",
    color: "white",
    width: 320,
    borderRadius: 4,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
});
export default Register;
