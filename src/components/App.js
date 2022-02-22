import React, { useState } from 'react'; 
import {InputData} from './InputData';
import NavBar from './NavBar';
import Footer from './Footer';
import { Routes, Route, Navigate, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="inputData" element={<InputData />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
