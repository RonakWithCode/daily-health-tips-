import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// Import other pages as needed
import Tips from './pages/Tips';
import Exercises from './pages/Exercises';
import Nutrition from './pages/Nutrition';
import Community from './pages/Community';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Header />
        <div className="flex-1 ml-0 md:ml-64">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add routes for other pages */}
            <Route path="/tips" element={<Tips />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
