import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { res_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = ({ category, setCategory, restaurant, setRestaurant }) => {
  const { location } = useState(StoreContext);
  const { food_list } = useState(StoreContext);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        qafghj ikmfv ujmn ujmn gb kmdfv hndcolk,gv ujhnfgvb lk,v hn v kmgbkm b
        ol,v jn hn lo,fv jn gbn p;.jnkm, gb jn fvgbl.n{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <h1>Explore our restaurants</h1>
      <div className="explore-restaurant-list">
        {res_list.map((item, index) => {
          if (location === item.location) {
            return (
              <div
                onClick={() =>
                  setRestaurant((prev) =>
                    prev === item.res_name ? "All" : item.res_name
                  )
                }
                key={index}
                className="explore-restaurant-list-item"
              >
                <img
                  className={restaurant === item.res_name ? "active" : ""}
                  src={item.res_image}
                  alt=""
                />
                <p>{item.res_name}</p>
              </div>
            );
          }
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
