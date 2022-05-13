import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about-us" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
