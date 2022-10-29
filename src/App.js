import './App.css';
import React, {useState, useEffect} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Landing from './components/landing';
import { Routes, Route } from "react-router-dom";
import ContactUs from './components/contactUs';
import TestLanding from './components/testLanding';
import AboutUs from './components/aboutUs';
import Gallery from './components/gallery';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpointMobile = 600;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Routes>
        <Route path="/" element={<ParallaxProvider>
     {width < breakpointMobile ? <Landing/> : <TestLanding/>}
    </ParallaxProvider>} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/test" element={<ParallaxProvider>
      <Landing/>
    </ParallaxProvider>} />
    </Routes>
  );
}

export default App;

