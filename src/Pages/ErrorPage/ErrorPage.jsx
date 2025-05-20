import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-center">
      <div className="max-w-md">
        <div className="text-9xl font-bold text-primary">404</div>
        <h1 className="text-3xl font-bold mt-4 text-gray-800">
          Page Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          Looks like this chapter doesn’t exist in our book.
        </p>
        <div className="flex justify-center mt-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Book"
            className="w-28 h-28"
          />
        </div>
        <Link to="/" className="btn btn-primary mt-6">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
