import React from "react";
import { useLoaderData } from "react-router";
import RecipeDetails from "./RecipeDetails/RecipeDetails";

const Details = () => {
  const data = useLoaderData();

  return (
    <div>
      <RecipeDetails recipe={data} />
    </div>
  );
};

export default Details;
