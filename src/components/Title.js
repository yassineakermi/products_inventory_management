import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Title({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
  },
  title: {
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Title;
