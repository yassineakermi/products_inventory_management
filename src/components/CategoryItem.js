import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { elevation } from "../utils/styles";

function CategoryItem({
  icon = undefined,
  title = "Pizza",
  index,
  selectCaregory,
  activeCategory,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        elevation,
        index == 0 ? { marginLeft: 20 } : { marginLeft: 10 },
        activeCategory.indexOf(title) >= 0 ? styles.onPressContainer : {},
      ]}
      onPress={(_) => selectCaregory(title)}
    >
      <View
        style={[
          styles.imageView,
          activeCategory.indexOf(title) >= 0 ? styles.onPressImageView : {},
        ]}
      >
        <Image
          style={[styles.image]}
          source={icon ? icon : require("../assets/images/burger.png")}
        />
      </View>
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 40,
    width: 85,
    height: 120,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },
  onPressContainer: {
    backgroundColor: "orange",
  },
  imageView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  onPressImageView: {
    borderRadius: 500,
    backgroundColor: "white",
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  categoryTitle: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  elevation,
});

export default CategoryItem;
