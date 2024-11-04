import React, {useState} from "react";
import {useLoaderData} from "react-router-dom";

const Dashboard = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  //
  const handleSort = (sortBy) => {
    if (sortBy == price) {
      // sort by price
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setProducts(sorted);
    }
  };

  return (
    <div>
      {/*  */}
      <div className="hero bg-purple-500">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl text-white font-bold">Dashboard</h1>
            <p className="mb-5">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-6 justify-center">
              <button className=" w-36 p-2 rounded-full font-semibold bg-white text-purple-600">
                Cart
              </button>
              <button className=" w-36 p-2 rounded-full font-semibold bg-white text-purple-600">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between mt-10">
        <h1 className="w-36 p-2 font-bold text-2xl ">Cart</h1>
        <div className="flex gap-6 justify-center ">
          <h1 className="w-30 p-5 font-bold">Total cost: 0</h1>
          <button
            onClick={() => handleSort(price)}
            className="btn-md w-32 rounded-full font-semibold text-white bg-purple-600"
          >
            Sort by Price
          </button>
          <button className=" btn-md w-32 rounded-full font-semibold text-white  bg-purple-600">
            Purchase
          </button>
        </div>
      </div>
      {/* need map */}
    </div>
  );
};

export default Dashboard;
