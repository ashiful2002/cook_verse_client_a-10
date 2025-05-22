import React from "react";
import { Helmet } from "react-helmet";
import RecipeForm from "./RecipeForm/RecipeForm";

const AddRecipe = () => {
  return (
    <>
      <Helmet>
        <title>Add Recipe | Cook_verse</title>
      </Helmet>
      <RecipeForm />
    </>
  );
};

export default AddRecipe;
