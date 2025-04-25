import React, { useRef } from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{
        '::-webkit-scrollbar': { width: '10px' },
        '::-webkit-scrollbar-track': {
          background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
          borderRadius: '10px'
        },
        '::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
          borderRadius: '10px'
        },
        html: {
          scrollbarColor: '#6a11cb #2575fc',
          scrollbarWidth: 'thin',
        }
      }} />

      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, experienceRef, skillsRef, contactRef }} />

     <section ref={homeRef}><Home /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={experienceRef}><Experience /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={contactRef}><Contact /></section> 

      <Footer />
    </>
  );
};

export default App;
