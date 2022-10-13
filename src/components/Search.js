import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../utils/styles";
function Search({
  placeholder,
  icon = "search",
  style = {},
  handleSearchInput = (_) => {},
  search = "",
}) {
  return (
    <View style={[styles.container, elevation, style]}>
      <FontAwesome style={styles.icon} name={icon} size={25} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleSearchInput}
        onEndEditing={(_) => console.log(search)}
        value={search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
  },
  elevation,
  input: {
    fontSize: 20,
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default Search;
