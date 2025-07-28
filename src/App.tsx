import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import CodingProfiles from './pages/CodingProfiles';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Background />
        <Navbar />
        <main className="relative z-10 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/coding-profiles" element={<CodingProfiles />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;