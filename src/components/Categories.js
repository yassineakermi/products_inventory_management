import { FlatList } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import { RestaurantsContext } from "../context/RestaurantsContext";
const Categories = ({ data, keyExtractor }) => {
  const { fetchRestaurants } = useContext(RestaurantsContext);
  const [activeCategory, setActivecategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let aliases = [];
      data.forEach((item) => {
        console.log(item);
        if (activeCategory.indexOf(item.name) > -1) aliases.push(item.alias);
      });
      return await fetchRestaurants(aliases);
    };

    fetchData().catch(console.error);
  }, [activeCategory]);
  const selectCaregory = async (catName) => {
    let newActiveCategory;
    if (activeCategory.indexOf(catName) >= 0)
      newActiveCategory = [...activeCategory.filter((cat) => cat != catName)];
    else newActiveCategory = [catName, ...activeCategory];
    setActivecategory(newActiveCategory);
  };

  const renderCategoryItem = ({ item, index }) => (
    <CategoryItem
      icon={item.imageURL}
      title={item.name}
      index={index}
      selectCaregory={selectCaregory}
      activeCategory={activeCategory}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderCategoryItem}
      keyExtractor={keyExtractor}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0 }}
    />
  );
};

export default Categories;
