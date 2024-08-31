import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/react"
import Certificates from './components/Certificates';

const App = () => {

  const openLink = (link) => {
    window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      
      <div className='fixed top-0 left-0 w-full h-full -z-10'></div>

      <div className="fixed top-0 left-0 w-full h-full z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className='container mx-auto px-8'>
        <Navbar openLink = {openLink}/>
        <Hero />
        <About openLink = {openLink}/>
        <Technologies />
        <Experience />
        <Projects />
        < ToastContainer />
        <Certificates />
        <Contact />
      </div>
      
    </div>
  );
};

export default App;