import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon, Input } from "react-native-elements";

const backImage = require("../assets/backImage.png");
const logo = require("../assets/logo.png");

export default function SignIn({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [usersNames, setUsersNames] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        json.forEach((element) => {
          usersNames.push(element.username);
        })
      )
      .then(() => setUsersNames(usersNames))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => getUser(), []);

  const onHandleLogin = () => {
    if (name && name !== "" && password && password !== "") {
      console.log(name);
      console.log(usersNames);
      if (isLoading) {
        alert("Network Issue");
      } else {
        if (usersNames.includes(name)) {
          navigation.navigate("Posts");
        } else {
          alert("User not found");
        }
      }
    } else {
      alert("Please fill in all the gaps");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <Image source={logo} style={styles.birdImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <View style={{ marginTop: 200 }}>
          <Text style={styles.title}>Sign In</Text>
          <Input
            style={styles.input}
            placeholder="UserName"
            leftIcon={
              <Icon name="envelope" type="font-awesome" size={20} color="red" />
            }
            autoCorrect={false}
            keyboardType="default"
            autoCapitalize="none"
            textContentType="username"
            value={name}
            onChangeText={(text) => setName(text)}
            required
          />
          <Input
            style={styles.input}
            placeholder="Password"
            leftIcon={
              <Icon name="lock" type="font-awesome" size={20} color="red" />
            }
            rightIcon={
              <TouchableOpacity
                style={{ padding: 4 }}
                onPress={() => {
                  setPinSecure(!pinSecure);
                }}
              >
                <Icon name="eye" type="font-awesome" size={20} color="red" />
              </TouchableOpacity>
            }
            autoCorrect={false}
            keyboardType="visible-password"
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry
            autoFocus={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            required
          />
          <Text style={{ marginTop: -30, textAlign: "right" }}>
            Forgot password?
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "red", fontWeight: "600", fontSize: 14 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    paddingBottom: 0,
  },
  input: {
    marginBottom: 0,
    fontSize: 16,
    padding: 10,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },

  birdImage: {
    width: "40%",
    height: 150,
    position: "absolute",
    top: 50,
    left: 130,
    resizeMode: "cover",
  },

  whiteSheet: {
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "red",
    height: 45,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
