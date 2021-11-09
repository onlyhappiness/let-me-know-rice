import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './views/NavBar'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          {/* <Route path="/signIn" element={<SignIn /> } /> */}
          <Route path="/signIn" element={ <SignIn /> } />
          <Route path="/signup" />
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
