import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import DashboardLayout from "./components/dashboard/dashboard-layout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <DashboardLayout /> */}
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
