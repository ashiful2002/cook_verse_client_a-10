import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeDetails = ({ recipe }) => {
  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState(Number(recipe.likeCount || 0));
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!user) {
      return;
    }

    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }

    fetch(`http://localhost:3000/recipes/${recipe._id}/like`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likeCount: likes + 1 }),
    });
  };

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
          {/* <p>
            <span className="font-semibold">Likes:</span> {recipe.likeCount}
          </p> */}
          {/* className={`rounded ${
              liked ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white py-2 px-4`} */}
          <button onClick={handleLike} disabled={liked}>
            <div className="flex items-center gap-2">
              <span>
                {liked ? <FaHeart className="text-primary" /> : <FaRegHeart />}
              </span>{" "}
              <span>{likes}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
