import { useLoaderData } from "react-router";

const AllItems = () => {
  const allItems = useLoaderData();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">All Recipes</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Cuisine</th>
              <th>Prep Time</th>
              <th>Categories</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="w-16 h-16">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.cuisine}</td>
                <td>{item.preparation_time} min</td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {item.selectedCategories.map((cat, i) => (
                      <span
                        key={i}
                        className="badge badge-outline badge-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{item.email}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm btn-outline btn-info">View</button>
                  <button className="btn btn-sm btn-outline btn-warning">Edit</button>
                  <button className="btn btn-sm btn-outline btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
