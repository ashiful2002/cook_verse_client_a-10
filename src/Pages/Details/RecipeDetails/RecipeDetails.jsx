import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeDetails = ({ recipe }) => {
  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState(Number(recipe.likeCount || 0));
  // const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!user) {
      return;
    }

    // if (!liked) {
    //   setLikes(likes + 1);
    //   setLiked(true);
    // }
    const newLikes = likes + 1;
    // set in ui
    setLikes(newLikes);

    fetch(`http://localhost:3000/recipes/${recipe._id}/like`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      //send response in backend
      body: JSON.stringify({ likeCount: newLikes }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to update like count");
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
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
          
          <button onClick={handleLike} >
            <div className="flex items-center gap-2">
              <span>
                { <FaHeart className="text-primary" /> }
              </span>
              <span>{likes}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
