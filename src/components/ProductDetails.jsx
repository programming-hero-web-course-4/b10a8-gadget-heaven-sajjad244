import React, {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  const {product_id} = useParams();
  const [Product, setProduct] = useState({});
  //
  useEffect(() => {
    const singleData = data.find((product) => product.product_id == product_id);
    setProduct(singleData);
  }, [data, product_id]);

  return (
    <div>
      <div className="hero bg-purple-500 min-h-96 relative">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl text-white font-bold">
              Product Details
            </h1>
            <p className="mb-5">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="card w-2/3 mx-auto card-side bg-base-100 shadow-xl -top-20">
        <h1>{Product.product_id}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
