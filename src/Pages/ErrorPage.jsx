import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-screen gap-10">
        <h2 className="text-5xl font-bold  ">
          Page Not Found 404 <span className="text-purple-600">(-_.)</span>
        </h2>
        <Link to="/" className="">
          <p className="mb-10 font-bold">Are you Lost!!</p>
          <p className="btn bg-purple-600 text-white font-semibold">Home</p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
