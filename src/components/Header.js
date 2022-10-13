import React from "react";
import { Text, View, StyleSheet } from "react-native";
function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.smallHeading}>Grab your</Text>
      <Text style={styles.boldHeading}>Delicious meal!</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  smallHeading: {
    fontSize: 35,
  },
  boldHeading: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
