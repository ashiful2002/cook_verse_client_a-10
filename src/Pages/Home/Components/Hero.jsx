import React from "react";
import { Link } from "react-router";
import Typing from "./Typing";
import Animation from "./Animation";

const HeroSection = () => {
  return (
    <div className="hero md:p-10 xl:p-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <Animation />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-primary">
            Discover Your Next Food
          </h1>
          <h1 className="text-5xl font-bold text-primary"></h1>
          <Typing />
          <p className="py-6 text-gray-600">
            A modern, elegant recipe book app that brings together Bangladeshi
            home cooks, chefs, and food lovers under one smart digital roof.
          </p>
          <Link to="/all-recipe" className="btn btn-primary">
            All Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
