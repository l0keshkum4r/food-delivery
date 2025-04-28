import React, { useContext } from "react";
import "./Location.css";
import { StoreContext } from "../../context/StoreContext";

const Location = () => {
  const { setLocation } = useContext(StoreContext);

  const onlocation = (location) => {
    if (location) {
      setLocation(location);
      localStorage.setItem("location", location);
    } else {
      alert(Error.message);
    }
  };

  return (
    <>
      <div className="image-container">
        <img src="header_img.png" alt="Food Plate" />
      </div>
      <div className="location-selector">
        <h1>Choose your location</h1>
      </div>
      <div className="button-container">
        <div className="button-row">
          <button onClick={() => setLocation("J.P Nagar")}>J.P Nagar</button>
          <button onClick={() => setLocation("Jayanagar")}>Jayanagar</button>
        </div>
        <div className="button-row">
          <button onClick={() => setLocation("Electronic City")}>
            Electronic City
          </button>
          <button onClick={() => setLocation("White Field")}>
            White Field
          </button>
        </div>
        <div className="button-row">
          <button onClick={() => setLocation("BTM Layout")}>BTM Layout</button>
        </div>
      </div>
    </>
  );
};

export default Location;
