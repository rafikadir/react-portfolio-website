import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Sections/About/About';
import Counter from './Sections/Counter/Counter';
import Home from './Sections/Home/Home';
import Skills from './Sections/Skills/Skills';
import Tools from './Sections/Tools/Tools';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Counter/>
    </>
  );
};

export default App;