import React from "react";
import HeroSection from "./Components/Hero";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Cook_verse</title>
      </Helmet>
      <HeroSection />
    </div>
  );
};

export default Home;
