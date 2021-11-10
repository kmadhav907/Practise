import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
const Application: React.FC<{}> = (props) => {
  return (
    <BrowserRouter>
      <nav
        style={{
          height: 'auto',
          width: '96vw',
          padding: '2vh 2vw',
          background: 'yellow'
        }}
      >
        Hi This is Nav
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
