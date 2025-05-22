import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{recipe.title}</h2>
          <p>
            <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
          </p>
          <p>
            <span className="font-semibold">Preparation Time:</span>{" "}
            {recipe.preparation_time} minutes
          </p>
          <p>
            <span className="font-semibold">Ingredients:</span>{" "}
            {recipe.ingredients}
          </p>
          <p>
            <span className="font-semibold">Instructions:</span>{" "}
            {recipe.instructions}
          </p>
          <p>
            <span className="font-semibold">Categories:</span>{" "}
            {recipe.selectedCategories?.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Likes:</span> {recipe.likeCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
