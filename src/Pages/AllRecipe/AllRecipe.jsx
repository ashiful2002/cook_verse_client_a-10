import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 flex-wrap">
        {data.map((item, index) => (
          <div className="card bg-amber-100 p-4 " key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="w-52 rounded-2xl"
            />
            <h2>Name: {item.title}</h2>
            <p>Cousine: {item.cuisine}</p>
            <p>Ingredients: {item.ingredients}</p>
            <p>Instructions: {item.instructions}</p>
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
            <p className="flex items-center gap-2">
              <button onClick={handelHeartCount}>
                <FaHeart />
              </button>
              {/* {setCount(item.likeCount)} */}
              <span>{count}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllRecipe;
