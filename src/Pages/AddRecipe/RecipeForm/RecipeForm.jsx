import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider";

const RecipeForm = () => {
  const { user } = useContext(AuthContext);
  const [selectedCuisine, setSelectedCuisine] = useState("Cousine Type");

  const cuisines = [
    "select one",
    "Bangladeshi",
    "Italian",
    "Mexican",
    "Chinese",
    "Others",
  ];
  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];

  const handleAddRecipe = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const selectedCategories = formData.getAll("categories");

    const title = e.target.title.value;
    const ingredientsInput = e.target.ingredients.value;
    const instructions = e.target.instructions.value;
    const cuisine = e.target.cuisine.value;
    const preparation_time = e.target.preparation_time.value;
    const likeCount = e.target.likeCount.value;
    const image = e.target.image.value;
    const ingredients = ingredientsInput.split(",").map((item) => item.trim());

    const recipes = {
      title,
      ingredients,
      instructions,
      cuisine,
      preparation_time,
      selectedCategories,
      likeCount,
      image,
      email: user?.email,
    };

    fetch("https://a10-book-server-app.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipes),
    })
      .then((res) => res.json())
      .then((data) => {
        data.body;
        toast("data added");
      })
      .catch((err) => console.log("db error", err));
  };
  return (
    <div className="flex flex-col items-center justify-center  bg-base-200">
      <h2 className="text-2xl font-semibold text-primary my-3">
        Add Your Recipe
      </h2>
      <form
        onSubmit={handleAddRecipe}
        className="fieldset  border-base-300 rounded-box w-xs border p-4"
      >
        {/* title */}
        <label className="label">Title</label>
        <input
          type="text"
          name="title"
          className="input"
          placeholder="Your recipe name"
        />
        {/* ingredients */}
        <label className="label">Ingredients</label>
        <input
          type="text"
          name="ingredients"
          className="input"
          placeholder="which ingredients you need for your recipe"
        />
        {/* instructiuons */}
        <label className="label">Instructions</label>
        <input
          type="text"
          name="instructions"
          className="input"
          placeholder="what to do"
        />
        {/* Cuisine Type */}
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            {selectedCuisine}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
          >
            {cuisines.map((cuisine, index) => (
              <li key={index}>
                <a onClick={() => setSelectedCuisine(cuisine)}>{cuisine}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Hidden input for formData compatibility */}
        <input type="hidden" name="cuisine" value={selectedCuisine} />

        {/* Preparation Time */}
        <label className="label">Preparation Time (in minutes)</label>
        <input
          type="number"
          name="preparation_time"
          className="input"
          placeholder="Time in minutes"
        />
        {/* Categories Checkboxes */}
        <div>
          <p className="font-semibold mb-1">Categories:</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <label key={index} className="label cursor-pointer gap-2">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  className="checkbox"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
        {/*  like count */}

        <label className="label">Like Count</label>
        <input
          type="text"
          defaultValue={0}
          name="likeCount"
          className="input"
          placeholder="Like count"
        />
        {/* image */}
        <label className="label">Image</label>
        <input
          type="text"
          name="image"
          className="input"
          placeholder="Paste photo url here"
        />
        <button className="btn btn-neutral mt-4">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
