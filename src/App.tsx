import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Review from "./pages/review/Index";
import Favorite from "./pages/favorite/Index";
import Community from "./pages/community/Index";
import MyInfo from "./pages/my-info/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/review" element={<Review />} />
            <Route path="/community" element={<Community />} />
            <Route path="/my-info" element={<MyInfo />} />

            {/* <Route path="/home" element={<Home />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
