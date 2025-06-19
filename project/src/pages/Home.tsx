import React from 'react';
import Hero from '../components/Hero';
import Activities from '../components/Activities';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Activities />
      <Testimonials />
    </>
  );
};

export default Home;