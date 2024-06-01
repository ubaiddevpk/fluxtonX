import React from 'react';
import HeroSection from '../Components/HeroSection';
import ServiceCopm from '../Components/ServiceCopm';
import AboutUSComp from '../Components/AboutUSComp';
import Counter from '../Components/Counter';
import PortfolioComp from '../Components/PortfolioComp';
import TestimonialComp from '../Components/TestimonialComp';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCopm/>
      <AboutUSComp/>
      <Counter/>
      <PortfolioComp/>
      <TestimonialComp/>
    </>
  );
}

export default Home;
