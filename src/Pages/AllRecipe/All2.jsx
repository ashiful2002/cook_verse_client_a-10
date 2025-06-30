import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const ALl2 = () => {
  const data = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [filteredData, setFilteredData] = useState(data);
  const [sortOption, setSortOption] = useState("likes-desc");

  useEffect(() => {
    let filtered = [];

    if (selectedCuisine === "All") {
      filtered = data;
    } else {
      filtered = data.filter(
        (r) => r.cuisine?.toLowerCase() === selectedCuisine.toLowerCase()
      );
    }

    // Sorting
    let sorted = [...filtered];
    switch (sortOption) {
      case "likes-desc":
        sorted.sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0));
        break;
      case "likes-asc":
        sorted.sort((a, b) => (a.likeCount || 0) - (b.likeCount || 0));
        break;
      case "prep-asc":
        sorted.sort(
          (a, b) => (a.preparation_time || 0) - (b.preparation_time || 0)
        );
        break;
      case "prep-desc":
        sorted.sort(
          (a, b) => (b.preparation_time || 0) - (a.preparation_time || 0)
        );
        break;
      default:
        break;
    }

    setFilteredData(sorted);
  }, [selectedCuisine, sortOption, data]);

  const cuisines = ["All", ...new Set(data.map((r) => r.cuisine))];

  return (
    <>
      <Helmet>
        <title>All Recipe | Cook_verse</title>
      </Helmet>

      <div className="mb-5 p-4 flex flex-col sm:flex-row gap-4 justify-between">
        {/* Filter by Cuisine */}
        <div>
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

        {/* Sort By */}
        <div>
          <label className="font-semibold mr-2">Sort By:</label>
          <select
            className="select select-bordered"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="likes-desc">Most Liked</option>
            <option value="likes-asc">Least Liked</option>
            <option value="prep-asc">Prep Time (Low to High)</option>
            <option value="prep-desc">Prep Time (High to Low)</option>
          </select>
        </div>
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
                  className="w-110 h-72 object-cover"
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
