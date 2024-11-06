import React, {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {FaCartShopping, FaRegHeart} from "react-icons/fa6";
import {addFavorite, getAllProduct} from "../utilites";

const ProductDetails = () => {
  const data = useLoaderData();
  const {product_id} = useParams();
  const [product, setProduct] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  //? for single data and all product

  useEffect(() => {
    const singleData = data.find((product) => product.product_id == product_id);
    setProduct(singleData);
    const favorite = getAllProduct(); //came from local_storage
    const isExist = favorite.find(
      (item) => item.product_id == product.product_id
    );
    if (isExist) {
      setIsFavorite(true);
    }
  }, [data, product_id]);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification = [],
    rating,
  } = product;

  //!   Handle Favorite btn
  //came from local_storage
  const handleFavorite = (product) => {
    addFavorite(product); //came from local_storage
    setIsFavorite(true);
  };
  const handleCart = (product) => {
    addFavorite(product); //came from local_storage
    setIsFavorite(true);
  };

  //!
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
        <div
          className="lg:flex space-y-6 p-10 gap-10 justify-center items-center
        "
        >
          <div className="lg:w-2/3">
            <img className="rounded-lg" src={product_image} alt="" />
          </div>
          <div className="grid gap-y-2">
            <h1 className="font-semibold text-2xl"> {product_title} </h1>
            <p className="font-semibold "> {description} </p>
            <ul className="list-decimal list-inside ml-3 font-semibold">
              {Specification.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-md font-semibold">Price: ${price} </p>
            <p className="text-md font-semibold">Rating </p>
            <div className="flex gap-5">
              <span>
                <ReactStars></ReactStars>
              </span>
              <span className="text-sm font-semibold border-2 rounded-md">
                {rating}
              </span>
            </div>
            <div className="flex gap-5 mt-5">
              <button
                onClick={() => handleCart(product)}
                className=" btn  rounded-full font-semibold text-white  bg-purple-600  flex justify-center items-center gap-2"
              >
                Add To Card <FaCartShopping />
              </button>

              <button
                disabled={isFavorite}
                className=" rounded-full btn"
                onClick={() => handleFavorite(product)}
              >
                <FaRegHeart className="text-lg rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
