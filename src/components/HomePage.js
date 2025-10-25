import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Process from './Process';
import Contact from './Contact';
import Footer from './Footer';

const HomePage = ({ projects }) => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio projects={projects} />
      <Process />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
