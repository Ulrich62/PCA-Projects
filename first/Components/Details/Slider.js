import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const images = [
  require("../../assets/montre.jpeg"),
  require("../../assets/photo.jpeg"),
  require("../../assets/casque.jpeg"),
];

const { width } = Dimensions.get("window");
const height = width * 0.7;

export default function Slider() {
  const [state, setState] = useState(0);

  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {images.map((item, index) => (
          <Image source={item} key={index} style={styles.photos} />
        ))}
      </ScrollView>
      <View style={styles.simvol}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={k===state ? styles.paginTextActive : styles.paginText}
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width,
    height,
  },

  photos: {
    width,
    height,
    resizeMode: "cover",
  },

  simvol: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },

  paginText: {
    color: "lightgrey",
    margin: 3,
  },

  paginTextActive: {
    color: "white",
    margin: 3,
  },
});
