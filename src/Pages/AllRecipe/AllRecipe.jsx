import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaHeart, FaLongArrowAltRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const AllRecipe = () => {
  const data = useLoaderData();
  const [count, setCount] = useState(0);
  const handelHeartCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Helmet>
        <title>All Recipe | Cook_verse</title>
      </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 flex-wrap">
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
                  <span className="font-semibold">Preparation Time:</span>{" "}
                  {recipe.preparation_time} minutes
                </p>

                <p>
                  <span className="font-semibold">Categories:</span>{" "}
                  {recipe.selectedCategories?.join(", ")}
                </p>
                <div className="flex mt-3">
                  <p>
                    <span className="font-semibold">Likes:</span>{" "}
                    {recipe.likeCount}
                  </p>
                  <Link className="btn btn-xs" to={`/recipe/${recipe._id}`}>
                    View Details <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllRecipe;
