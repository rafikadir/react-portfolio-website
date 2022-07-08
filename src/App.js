import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Sections/About/About';
import Home from './Sections/Home/Home';
import Skills from './Sections/Skills/Skills';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </>
  );
};

export default App;