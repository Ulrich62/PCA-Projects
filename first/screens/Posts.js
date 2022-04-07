import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../Components/Posts/Cards";
import Header from "../Components/Posts/Header";
import Footer from "../Components/Posts/Footer";

const loader = require("../assets/loader.gif");

export default function Posts() {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getAllPosts = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    getAllPosts()
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        {isLoading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          posts.map((post, index) => <Card key={index} post={post} />)
        )}
      </ScrollView>
      <Footer style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
