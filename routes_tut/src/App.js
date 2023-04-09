import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/header.css'
import Home from './components/Home';
import About from './components/About';
import Header from './components/header';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
