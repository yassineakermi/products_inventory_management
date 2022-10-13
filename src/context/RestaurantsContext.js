var axios = require("axios").default;
import React, { createContext, useState } from "react";
export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchRestaurants = async (categories = []) => {
    console.log(categories, "categories");
    setIsLoading(true);
    var config = {
      headers: {
        Authorization:
          "Bearer kmuJu-0Zzy8GYdUnYzB015PF9KPQdku6KBS6T92UZrIF_HwVoavRJbn1Fs9Yn--qgiwpQ1_wFUs_O1v2n9-avKe-KBIBwufSseF520e_3EQ-vzlFw_0r0HJYezNHY3Yx",
      },
    };

    console.log(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=usa&categories=${
        categories.length > 0 ? categories.join(",") : "all"
      }`
    );
    let resp = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=usa&categories=${
        categories.length > 0 ? categories.join(",") : "all"
      }`,
      config
    );
    try {
      let restos = resp.data["businesses"].map((resto) => {
        return {
          name: resto["name"],
          image_url: resto["image_url"],
          id: resto["id"],
          rating: resto["rating"],
          review_count: resto["review_count"],
        };
      });
      setRestaurants(restos);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <RestaurantsContext.Provider
      children={children}
      value={{ restaurants, fetchRestaurants, isLoading }}
    />
  );
};
