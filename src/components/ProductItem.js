import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { elevation } from "../utils/styles";

const ProductItem = ({
  title = "This is a restaurant name",
  description = "4.5 stars",
  imageUrl = "https://nagrannar.is/images/restaurant-placeholder.png",
}) => {
  return (
    <View style={[styles.container, elevation]}>
      <Image style={styles.image} source={{ uri: imageUrl }} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{`${description} stars`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    width: "100%",
    backgroundColor: "white",
    marginVertical: 10,
  },
  elevation,
  image: {
    height: 85,
    width: 85,
    borderRadius: 50,
    alignSelf: "center",
  },
  info: {
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    marginLeft: 5,
  },
});

export default ProductItem;
