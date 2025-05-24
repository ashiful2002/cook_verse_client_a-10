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
        Featured recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 flex-wrap">
        {data.map((recipe, index) => (
          <div key={index} className="max-w-3xl mx-auto p-2">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-72 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold capitalize">
                  {recipe.title}
                </h2>
                <p>
                  <span className="font-semibold">Cuisine:</span>{" "}
                  {recipe.cuisine}
                </p>

                <p>
                  <span className="font-semibold">Categories:</span>{" "}
                  {recipe.selectedCategories?.join(", ")}
                </p>
                <p className="flex items-center justify-end gap-2">
                  {/* <span className="font-semibold">Likes:</span> */}
                  <FaRegHeart /> {recipe.likeCount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto w-32 my-6">
        <Link to="/all-recipe" className="btn btn-primary ">
          All Recipe
        </Link>
      </div>
    </div>
  );
};

export default Home;
