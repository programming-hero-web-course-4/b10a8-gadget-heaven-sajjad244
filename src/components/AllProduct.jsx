import React from "react";
import {useLoaderData} from "react-router-dom";
import Product from "./Products/Product";

const AllProduct = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-purple-600">
        All Product
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-16
       "
      >
        {data.map((gadget) => (
          <Product gadget={gadget} key={gadget.product_id}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
