import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewsGallery from './pages/NewsGallery';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={ <Login /> } />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/news' element={ <NewsGallery /> } />
    </Routes>
  </Router>
  );
}

export default App;
