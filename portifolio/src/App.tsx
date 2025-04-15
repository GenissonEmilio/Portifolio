import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Header from './components/layout/Header/Header';
import './App.css';
import Footer from './components/layout/Footer/Footer';

const App: React.FC = () => {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App

