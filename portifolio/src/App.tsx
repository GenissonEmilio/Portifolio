import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

const App: React.FC = () => {

  return (
    <Router>
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

