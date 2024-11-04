import React from "react";
import {Link, NavLink, useLoaderData} from "react-router-dom";

const Categories = ({categories}) => {
  return (
    <div className="bg-white">
      <Link to="/allProduct">
        <h1 className=" font-bold text-center mb-3 bg-purple-600 text-white rounded-lg p-1">
          All Product
        </h1>
      </Link>
      <div role="tablist" className="tabs tabs-bordered">
        {categories.map((category) => (
          <p key={category.id} className="border-2 p-1 rounded-lg grid">
            <NavLink
              to={`/category/${category.category}`}
              role="tab"
              key={category.id}
              className={({isActive}) =>
                `tab font-semibold rounded-lg ${
                  isActive ? "bg-purple-500 text-white" : " text-purple-500"
                }`
              }
            >
              {category.category}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
