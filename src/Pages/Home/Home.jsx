import React, { useState } from "react";
import HeroSection from "./Components/Hero";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | Cook_verse</title>
      </Helmet>
      <HeroSection />
      <h2 className="text-3xl font-semibold text-primary my-3 text-center">
        Featured recipes is here
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="object-cover rounded-2xl w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
              />
              <div className="flex items-center">
                <h2 className="mb-1 text-xl font-semibold">{item.title}</h2>{" "}
                <h2 className="badge">{item.cuisine}</h2>
              </div>
              <p className="flex gap-2">
                {item.selectedCategories.map((it, index) => (
                  <span
                    key={index}
                    className="bg-amber-300 rounded-2xl px-2 text-stone-800"
                  >
                    {it}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex flex-wrap justify-between">
              
              <div className="flex space-x-2 text-sm dark:text-gray-600">
                <button
                  type="button"
                  className="flex items-center p-1 space-x-1.5"
                >
                  <FaRegHeart />
                  <span>{item.likeCount}</span>
                </button>
              </div>
            </div>
          </div>
        
        ))}
      </div>
      <Link to="/all-recipe" className="btn btn-primary ">
        All Recipe
      </Link>
    </div>
  );
};

export default Home;
