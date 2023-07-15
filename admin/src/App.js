import React from 'react';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
