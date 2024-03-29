/* eslint-disable no-restricted-globals */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Esummit from './pages/esummit';
import { useEffect } from 'react';

function App() {
  const reload = () => window.location.reload();
  var count = 0;

  useEffect(() => {
    if (location.pathname === '/ecell/index.html' && count === 0) {
      reload();
      count++;
    }
    // You can perform any action you want here
    // For example, make an API call, initialize some data, etc.
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Esummit></Esummit>} />
       </Routes>
    </Router>
  );
}

export default App;
