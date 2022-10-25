import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Error from './components/Error';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "../src/App.scss";

const App = () => {

 return (
   <>
   <Navbar />
  <Routes>
    <Route exact path='/' element={ <Home />}/>
    <Route exact path='/projects' element={ <Projects />}/>
    <Route exact path='*' element={ <Error/> } />
  </Routes>
  <Footer />
  </>
 )
}

export default App; 
