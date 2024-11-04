import React from "react";
import {NavLink, useLoaderData} from "react-router-dom";

const Categories = ({categories}) => {
  return (
    <div className="bg-white">
      <h1 className=" font-bold text-center mb-3 text-purple-600">
        All Product
      </h1>
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
