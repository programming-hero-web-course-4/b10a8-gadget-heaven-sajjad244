import React from "react";
import Banner from "../components/Banner";
import {Outlet, useLoaderData} from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Categories tab section */}
      <div className="md:flex md:justify-center gap-3">
        <div className="w-5/12  md:w-1/12 mx-auto">
          <Categories categories={categories}></Categories>
        </div>
        {/* Dynamic Nested Components */}
        <div className="w-10/12 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
