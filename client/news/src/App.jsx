import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Entertainment from './components/Entertainment';
import SearchResults from './components/SearchResults'; 
import Navbar from './components/Navbar';
import LoginSignup from './components/LoginSignup';

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />

        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/search" element={<SearchResults />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

