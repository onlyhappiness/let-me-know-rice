import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/@main/Dashboard";
import Favorite from "../pages/@main/Favorite";
import Menu from "../pages/@main/Menu";
import MyInfo from "../pages/@main/MyInfo";
import Restaurant from "../pages/@main/Restaurant";
import Register from "../pages/auth/Register";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />

        <Route path="/recommendation-menu" element={<Menu />} />
        <Route path="/recommendation-restaurant" element={<Restaurant />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/my-info" element={<MyInfo />} />
      </Routes>
    </BrowserRouter>
  );
};
