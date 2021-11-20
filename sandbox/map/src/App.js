import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Map from './components/Map'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </div>
  )
}

export default App
