import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Slider from "../Components/Details/Slider";
import BodyContent from "../Components/Details/BodyContent";
import Footer from "../Components/Posts/Footer";
import UnderSlide from "../Components/Details/UnderSlide";

export default function Details(route) {
  const [isLoading, setLoading] = useState(true);

  const post = route.route.params;
  const [user, setUser] = useState("");
  const [detail, setDetail] = useState("");

  const getPostId = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + post.id)
      .then((response) => response.json())
      .then((json) => setDetail(json))
      .catch((error) => console.error(error));
  };

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + post.userId)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getPostId(), getUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Slider />
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <UnderSlide detail={detail} user={user} />
          <ScrollView>
            <BodyContent detail={detail} />
          </ScrollView>
        </View>
      )}
      {/* <Footer style={styles.footer} /> */}
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
