import React from "react";
import {Link, NavLink, useLoaderData} from "react-router-dom";

const Categories = ({categories}) => {
  return (
    <div className="bg-white mt-10 ">
      <Link to="/allProduct">
        <h1
          className=" font-semibold p-3
         text-center mb-3 text-purple-600 border-2 hover:bg-purple-600 hover:text-white rounded-lg "
        >
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
