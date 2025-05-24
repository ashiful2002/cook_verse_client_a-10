import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { data } from "react-router";
import RecipeCard from "./RecipeCard/RecipeCard";

const MyRecipe = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (user.email) {
      fetch(`https://a10-book-server-app.vercel.app/recipes?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    fetch(`https://a10-book-server-app.vercel.app//recipes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => setRecipes((prev) => prev.filter((re) => re._id !== id)));
  };

  const handleUpdate = (updateRecipe) => {
    setRecipes((prev) =>
      prev.map((r) => (r._id === updateRecipe._id ? updateRecipe : r))
    );
  };
  return (
    <div>
      <Helmet>
        <title>My Recipe | Cook_verse</title>
      </Helmet>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
