import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Contenu(props) {
  const post = props.detail;

  return (
    <View>
      <Text style={styles.text}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 170,
    resizeMode: "contain",
  },
  textCenter: {
    marginTop: 20,
    textAlign: "center",
  },
  row: {
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  author: {
    color: "grey",
    alignSelf: "flex-start",
  },
  label: {
    marginTop: 20,
    flexDirection: "column",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    marginTop: -10,
  },

  label1: {
    marginTop: 20,
    flexDirection: "column",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "grey",
  },

  unique: {
    alignItems: "center",
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 2,
    borderWidth: 1,
  },

  text: {
    margin: 20,
    marginTop: 0,
  },
});
