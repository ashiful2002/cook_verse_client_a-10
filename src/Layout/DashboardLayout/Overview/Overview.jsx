import { Link, useLoaderData } from "react-router";
import AllItems from "./AllItems";
import MyItems from "./MyItems";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Overview = () => {
  const allItems = useLoaderData();
  const { user } = useContext(AuthContext);
  const myItems = allItems.filter((item) => item.email === user.email);

  return (
    <div>
      <h1 className="text-2xl text-center mt-3 ">
        Welcome, {user?.displayName}
      </h1>
      <div className="stats-cards flex gap-4 mt-6">
        <Link to="/dashboard/all-recipe">
          <div className="card bg-blue-100 p-4 rounded">
            <h2>Total Items</h2>
            <p>{allItems.length}</p>
          </div>
        </Link>
        <Link to="/dashboard/my-recipe">
          <div className="card bg-green-100 p-4 rounded">
            <h2>My Items</h2>
            <p>{myItems.length}</p>
          </div>
        </Link>
      </div>
      {/* <AllItems />
      <MyItems /> */}
    </div>
  );
};

export default Overview;
