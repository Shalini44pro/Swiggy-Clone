import { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import RestaurantMenue from "./components/RestaurantMenue";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route path="/" element={<Body></Body>}></Route>
          <Route path="/restaurantMenue" element={<RestaurantMenue />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
