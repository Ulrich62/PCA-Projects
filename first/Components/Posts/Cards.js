import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Cards(props) {
  const post = props.post;
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);
  const dim = comments.length;

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + post.userId)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((error) => console.error(error));
  };

  const getComments = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + post.id + "/comments")
      .then((response) => response.json())
      .then((json) => setComments(json))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getUser(), getComments();
  }, []);

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", post)}>
      <View style={styles.container}>
        <View style={styles.column}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/200" }}
          />
        </View>
        <View style={styles.column2}>
          <Text style={styles.textCenter}>{post.title}</Text>
          <Text style={styles.author}>by {user.name}</Text>
          <View style={styles.label}>
            <Text style={styles.unique}>Label 1</Text>
            <Text style={styles.unique}>Label 2</Text>
          </View>
          <View style={styles.label}>
            <Entypo
              name="chat"
              size={24}
              color="grey"
              style={{ marginRight: 5 }}
            />
            <Text> {dim} Comments</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    resizeMode: "contain",
  },
  textCenter: {
    marginTop: 20,
    textAlign: "left",
  },
  container: {
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
  column2: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50%",
    marginBottom:15
  },
  author: {
    color: "grey",
    textAlign: "left",
  },
  label: {
    marginTop: 20,
    flexDirection: "column",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
  },

  unique: {
    alignItems: "center",
    backgroundColor: "silver",
    borderRadius: 4,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 4,
    color: "white",
  },
});
