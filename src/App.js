/* eslint-disable no-restricted-globals */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Esummit from './pages/esummit';
import Events from './pages/Events';
import { useEffect } from 'react';

function App() {
  const reload = () => window.location.reload();

  useEffect(() => {
    if (location.pathname === '/main.html') {
      reload();
    }
    // You can perform any action you want here
    // For example, make an API call, initialize some data, etc.
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main.html"/>} />
        <Route path='/esummit' element={<Esummit/>}></Route>
        <Route path='/main.html'></Route>
       </Routes>
    </Router>
  );
}

export default App;
