import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const Login = ({ navigation, route }) => {
  const user = route.params?.user;
  return (
    <View style={styles.parent}>
      <View style={styles.main}>
        <View>
          <Icon name="logo-firebase" size={110} color="#ffa700"></Icon>
        </View>
        <View style={{ marginTop: 12 }}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={user ? user.email : ""}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            value={user ? user.password : ""}
          />
        </View>
        <View>
          <Button title="Login" style={styles.Button} onPress={() => Alert.alert("Logged In")}>
            <Text style={styles.text}>Login</Text>
          </Button>
          <View style={styles.action}>
            <Text>Don't have an account? </Text>
            <Text
              style={{ color: "blue" }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              {" "}
              Sign Up
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
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  input: {
    width: 320,
    backgroundColor: "#fff",
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
   elevation: 3
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

export default Login;
