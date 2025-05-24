import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const ALl2 = () => {
  const data = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (selectedCuisine === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (r) => r.cuisine?.toLowerCase() === selectedCuisine.toLowerCase()
      );
      setFilteredData(filtered);
    }
  }, [selectedCuisine, data]);

  const cuisines = ["All", ...new Set(data.map((r) => r.cuisine))];

  return (
    <>
      <Helmet>
        <title>All Recipe | Cook_verse</title>
      </Helmet>

      {/* Cuisine Dropdown */}
      <div className="mb-5 p-4">
        <label className="font-semibold mr-2">Filter by Cuisine:</label>
        <select
          className="select select-bordered"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 flex-wrap">
        {filteredData.map((recipe, index) => (
          <div key={index} className="max-w-3xl mx-auto p-2">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-72 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold capitalize">
                  {recipe.title}
                </h2>
                <p>
                  <span className="font-semibold">Cuisine:</span>{" "}
                  {recipe.cuisine}
                </p>
                <p>
                  <span className="font-semibold">Preparation Time:</span>{" "}
                  {recipe.preparation_time} minutes
                </p>

                <p>
                  <span className="font-semibold">Categories:</span>{" "}
                  {recipe.selectedCategories?.join(", ")}
                </p>
                <div className="flex mt-3 items-center justify-between">
                  <p>
                    <span className="font-semibold">Likes:</span>{" "}
                    {recipe.likeCount}
                  </p>
                  <Link className="btn btn-xs" to={`/recipe/${recipe._id}`}>
                    View Details <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ALl2;
