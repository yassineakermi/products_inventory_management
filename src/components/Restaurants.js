import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import ProductItem from "./ProductItem";

const Restaurants = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const renderRestoItem = ({ item }) => {
    return (
      <ProductItem
        description={item.rating}
        imageUrl={item.image_url}
        title={item.name}
      />
    );
  };
  return isLoading ? (
    <ActivityIndicator color="#0000ff" style={{ alignSelf: "center" }} />
  ) : (
    <FlatList
      data={restaurants}
      renderItem={renderRestoItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
});
export default Restaurants;
