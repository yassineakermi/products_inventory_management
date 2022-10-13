import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import ProductItem from "./src/components/ProductItem";
import Restaurants from "./src/components/Restaurants";
import Search from "./src/components/Search";
import Title from "./src/components/Title";
import { RestaurantsProvider } from "./src/context/RestaurantsContext";

export default function App() {
  const [search, setSearch] = useState("");

  const categories = [
    {
      name: "Cake",
      imageURL: require("./src/assets/images/cake.png"),
      alias: "cakeshop",
    },
    {
      name: "Pizza",
      imageURL: require("./src/assets/images/pizza.png"),
      alias: "pizza",
    },
    {
      name: "Pasta",
      imageURL: require("./src/assets/images/pasta.png"),
      alias: "pastashops",
    },
    {
      name: "Burger",
      imageURL: require("./src/assets/images/burger.png"),
      alias: "burgers",
    },
    {
      name: "Smoothies",
      imageURL: require("./src/assets/images/smoothies.png"),
      alias: "juicebars",
    },
    {
      name: "Steak",
      imageURL: require("./src/assets/images/steak.png"),
      alias: "steak",
    },
  ];

  const handleSearchInput = (term) => {
    setSearch(term);
  };
  return (
    <RestaurantsProvider>
      <View style={styles.container}>
        <Header />
        <Search
          placeholder={"Restaurants, food"}
          style={{ marginTop: 20 }}
          handleSearchInput={handleSearchInput}
          search={search}
        />
        <Categories data={categories} keyExtractor={(item) => item.name} />
        <Text style={styles.topRestaurants}>{"Top Restaurants"}</Text>
        <Restaurants />
      </View>
    </RestaurantsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topRestaurants: {
    color: "black",
    fontSize: 25,
    marginLeft: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
});
