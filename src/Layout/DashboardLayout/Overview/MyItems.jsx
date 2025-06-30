import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const allItems = useLoaderData();
  const myItems = allItems.filter((item) => item.email === user.email);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">My Items</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Title</th>
              <th>Cuisine</th>
              <th>Prep Time</th>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((item) => (
              <tr key={item._id}>
                <td className="font-semibold">{item.title}</td>
                <td>{item.cuisine}</td>
                <td>{item.preparation_time} mins</td>
                <td>{item.selectedCategories.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {myItems.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyItems;
