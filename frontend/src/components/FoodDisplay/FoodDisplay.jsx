import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

// ADD RESTAURANT AFTER CATEGORY
const FoodDisplay = ({ category, restaurant }) => {
  const { food_list } = useContext(StoreContext);
  const { location } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near {location}</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (
            (category === "All" &&
              location === item.location &&
              restaurant === "All") ||
            (category === item.category &&
              location === item.location &&
              restaurant === "All") ||
            (category === "All" &&
              location === item.location &&
              restaurant === item.restaurant) ||
            (category === item.category &&
              location === item.location &&
              restaurant === item.restaurant)
            // (category === "All" && location === item.location) ||
            // (category === item.category && location === item.location)
          ) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
