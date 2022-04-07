import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import React from "react";

export default function Avant(props) {
  const post = props.detail;
  const user = props.user;

  return (
    <View>
      <Text style={styles.title}>
        {post.title}
      </Text>
      <Text
        style={styles.author}
      >
        by {user.name}
      </Text>
      <View style={styles.label}>
        <TouchableOpacity style={styles.label1}>
          <AntDesign
            name="like1"
            size={20}
            color="grey"
            style={{ marginRight: 5 }}
          />
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.label1}>
          <Entypo
            name="message"
            size={20}
            color="grey"
            style={{ marginRight: 5 }}
          />
          <Text>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "flex-start",
    margin: 20,
  },

  author: {
    justifyContent: "flex-start",
    margin: 20,
    marginTop: -10,
    color: "grey",
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
});
