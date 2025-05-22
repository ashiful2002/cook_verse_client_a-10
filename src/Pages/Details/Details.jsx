import React from "react";
import { useLoaderData } from "react-router";
import RecipeDetails from "./RecipeDetails/RecipeDetails";

const Details = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <RecipeDetails recipe={data} />
    </div>
  );
};

export default Details;
