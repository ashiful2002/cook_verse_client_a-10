import React, { useState } from "react";

const UpdateModal = ({ recipe, onClose, onSave }) => {
  const [formData, setFormData] = useState(recipe);

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/recipes/${recipe._id}`, {
      method: "PUt",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updatedData) => {
        onSave(updatedData);
        onClose();
      });
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

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Title"
          />

          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Image URL"
          />

          <input
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Ingredients (comma separated)"
          />

          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Instructions"
          />

          <input
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Cuisine"
          />

          <input
            name="preparation_time"
            value={formData.preparation_time}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Preparation Time"
          />

          <input
            name="selectedCategories"
            value={formData.selectedCategories}
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
