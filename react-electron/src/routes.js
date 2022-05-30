// import {
//   HomeOutlined,
//   LikeOutlined,
// } from "@ant-design/icons";

// const routesItems = [
//   {
//     key: "1",
//     icon: <HomeOutlined />,
//     label: "Home",
//     href: "/",
//   },
//   {
//     key: "2",
//     icon: <LikeOutlined />,
//     label: "Recommend",
//     href: "/like",
//   },
// ];

// export default routesItems;

import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Like from './pages/Like';
import Login from './pages/Login';
import Map from './pages/Map';

function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/like' element={<Like />} />
      <Route path='/map' element={<Map />} />
    </Routes>
  );
}

export default Router;
