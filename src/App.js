import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Esummit from './pages/esummit';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Esummit />} />
       </Routes>
    </Router>
  );
}

export default App;
