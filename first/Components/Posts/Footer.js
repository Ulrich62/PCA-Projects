import { View , StyleSheet} from "react-native";
import React from "react";
import { Entypo, Ionicons, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View
      style={styles.container}
    >
      <Entypo
        name="home"
        size={24}
        color="black"
        style={{ flexDirection: "column" }}
        onPress={() => navigation.navigate("Posts")}
      />
      <Ionicons
        name="compass"
        size={24}
        color="black"
        style={{ flexDirection: "column" }}
      />
      <Ionicons
        name="search"
        size={24}
        color="black"
        style={{ flexDirection: "column" }}
      />
      <Foundation
        name="comments"
        size={24}
        color="black"
        style={{ flexDirection: "column" }}
      />
      <Ionicons
        name="notifications"
        size={24}
        color="black"
        style={{ flexDirection: "column" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
});
