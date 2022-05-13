import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import DashboardLayout from './components/dashboard/dashboard-layout';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <DashboardLayout />
        {/* FIXME: 일단 주석 */}
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={<Home />}
          />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
