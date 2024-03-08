import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Esummit from './pages/esummit';
import Events from './pages/Events';

function App() {
  // const reload = () => window.location.reload();
  // const navigate = useNavigate();  


  // function navigateToMain() {
  //   navigate('/esummit');
  // }  

  // function navigateToEsummit() {
  //   window.location.href = "/esummit";
  // }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Esummit/>} />
        <Route path='/esummit' element={<Navigate to="/"/>}></Route>
       </Routes>
    </Router>
  );
}

export default App;
