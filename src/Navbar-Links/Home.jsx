import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Services/>
    <Testimonials/>
    <HowItWorks/>
    <Benefits/>
    <FAQ/>
    </>
  );
};

export default Home;
