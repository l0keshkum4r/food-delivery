import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = ({ location }) => {
  const [category, setCategory] = useState("All");
  const [restaurant, setRestaurant] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
        restaurant={restaurant}
        setRestaurant={setRestaurant}
        location={location}
      />
      <FoodDisplay
        category={category}
        location={location}
        restaurant={restaurant}
      ></FoodDisplay>
      <AppDownload />
    </div>
  );
};

export default Home;
