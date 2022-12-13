import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/pages/Home'
import Upload from './components/pages/Upload'
import Gallery from './components/pages/Gallery'
import { Register } from './components/pages/auth/Register';
import React, { useState } from 'react';
import './styles/main.scss';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
