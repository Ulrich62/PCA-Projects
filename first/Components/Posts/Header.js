import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", width: "55%" }}>
        <Text style={{ alignSelf: "flex-end" }}>Explore</Text>
      </View>
      <View style={{ flexDirection: "column", width: "43%" }}>
        <Text style={{ alignSelf: "flex-end" }}>Filter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    height: 40,
  },
});
