import React, { useContext, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Location from "./pages/Location/Location";
import { StoreContext } from "./context/StoreContext";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowlogin] = useState(false);
  const { location } = useContext(StoreContext);

  return (
    <>
      {location ? (
        <>
          {showLogin ? <LoginPopup setShowlogin={setShowlogin} /> : null}
          <div className="app">
            <Navbar setShowlogin={setShowlogin} />
            <Routes>
              <Route path="/home" element={<Home location={location} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
              <Route path="/" element={<Navigate to="/home" />} />{" "}
              <Route path="/verify" element={<Verify />} />
              <Route path="/myorders" element={<MyOrders />} />
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Location />} />
        </Routes>
      )}
    </>
  );
};

export default App;
