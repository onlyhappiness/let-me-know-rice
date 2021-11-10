import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './navbar/NavBar';
import SignUp from './signUp/SignUp';
import Login from './login/Login';
import View from './views/View';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
        <Routes>
          <Route path="/signUp" element={ <SignUp /> }/>
          <Route path="/Login" element={ <Login /> } />
          <Route path="/map" element={ <View /> }/>

        </Routes>
      
    </div>
  )
}

function Welcome() {
  return (
    <div>아무거나 보여주세요!</div>
  )
}

export default App
