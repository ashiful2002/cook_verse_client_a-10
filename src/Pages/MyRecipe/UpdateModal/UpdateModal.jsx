import React, { useState } from "react";

const UpdateModal = ({ recipe, onClose, onSave }) => {
  const [formData, setFormData] = useState(recipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      ingredients:
        typeof formData.ingredients === "string"
          ? formData.ingredients.split(",").map((i) => i.trim())
          : formData.ingredients,
    };

    fetch(`http://localhost:3000/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((updatedData) => {
        onSave(updatedData);
        onClose();
      })
      .catch((err) => console.log(err, "update failed"));
  };

  return (
    <div>
      {" "}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <form
          className="bg-white p-6 rounded-md w-11/12 md:w-2/3 lg:w-1/2 space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold mb-2">Update Recipe</h2>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            defaultValue={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Title"
          />

          <input
            name="image"
            defaultValue={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Image URL"
          />

          <input
            name="ingredients"
            defaultValue={formData.ingredients}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Ingredients (comma separated)"
          />

          <textarea
            name="instructions"
            defaultValue={formData.instructions}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Instructions"
          />

          <input
            name="cuisine"
            defaultValue={formData.cuisine}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Cuisine"
          />

          <input
            name="preparation_time"
            defaultValue={formData.preparation_time}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Preparation Time"
          />

          <input
            name="selectedCategories"
            defaultValue={formData.selectedCategories}
            onChange={(e) =>
              setFormData({
                ...formData,
                selectedCategories: e.target.value.split(","),
              })
            }
            className="input input-bordered w-full"
            placeholder="Categories (comma separated)"
          />

          <div className="flex justify-end gap-3">
            <button type="button" className="btn btn-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
