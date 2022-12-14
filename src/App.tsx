import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/@main/Dashboard";
import Menu from "./pages/@main/Menu";
import Favorite from "./pages/@main/Favorite";
import MyInfo from "./pages/@main/MyInfo";
import Restaurant from "./pages/@main/Restaurant";

import Router from "./client/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/recommendation-menu" element={<Menu />} />
        <Route path="/recommendation-restaurant" element={<Restaurant />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/my-info" element={<MyInfo />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    // <Router />
  );
}

export default App;
