import React from "react";
import {Link} from "react-router-dom";

const Product = ({gadget}) => {
  const {price, product_image, product_title, product_id} = gadget || {};
  return (
    <div className="w-10/12 mx-auto">
      <div className="card  border-2 shadow-xl mx-auto mt-10 bg-transparent">
        <figure className="w-full h-48  mx-auto">
          <img className=" rounded-lg" src={product_image} alt="gadget" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold ">{product_title}</h2>
          <p className="text-lg font-semibold ">Price: {price} $</p>
          <div className="card-actions justify-start">
            <Link
              to={`/allProduct/${product_id}`}
              className="btn bg-white rounded-xl text-purple-500 border-purple-500"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
