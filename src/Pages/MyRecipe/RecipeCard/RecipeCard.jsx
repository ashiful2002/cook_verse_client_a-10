import React, { useState } from "react";
import UpdateModal from "../UpdateModal/UpdateModal";

const RecipeCard = ({ handleDelete, handleUpdate, recipe }) => {
    
  const [showModal, setShowModal] = useState(false);
  const handleDeleteClick = () => {
    if (confirm("Are you want to delete this recipe?")) {
      handleDelete(recipe._id);
    }
  };
  return (
    <>
      <div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">{recipe.title}</h2>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
          </p>
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>
          <p>
            <strong>Cuisine:</strong> {recipe.cuisine}
          </p>
          <p>
            <strong>Prep Time:</strong> {recipe.preparation_time} mins
          </p>
          <p>
            <strong>Categories:</strong> {recipe.selectedCategories.join(", ")}
          </p>
          <p>
            <strong>Likes:</strong> {recipe.likeCount}
          </p>

          <div className="flex gap-2 mt-3">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => setShowModal(true)}
            >
              Update
            </button>
            <button
              className="btn btn-error btn-sm"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
        {showModal && (
          <UpdateModal
            recipe={recipe}
            onClose={() => setShowModal(false)}
            onSave={handleUpdate}
          />
        )}
      </div>
    </>
  );
};

export default RecipeCard;
