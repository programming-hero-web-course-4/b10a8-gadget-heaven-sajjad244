import React, {useEffect, useState} from "react";
import {getAllProduct, removeFavorite} from "../utilites";

import SortCart from "./Products/SortCart";
import {NavLink} from "react-router-dom";

const Cart = () => {
  const [product, setProduct] = useState([]);
  //   for update price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favorites = getAllProduct(); //came from local-storage
    setProduct(favorites);
    //   for update price
    const totalAll = favorites.reduce((sum, b) => sum + b.price, 0);
    setTotalPrice(totalAll);
  }, []);

  const handleRemoved = (id) => {
    removeFavorite(id);
    const favorites = getAllProduct(); //came from local-storage
    setProduct(favorites);

    //   for update price

    const removedProduct = product.find((item) => item.product_id === id);
    if (removedProduct) {
      setTotalPrice((prevTotal) => prevTotal - removedProduct.price);
    }
  };

  //for sort
  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      // sort by price
      const sorted = [...product].sort((a, b) => b.price - a.price);
      setProduct(sorted);
    }
  };
  return (
    <div>
      <div className="flex justify-between mt-10 p-5">
        <h1 className="w-36 p-5 font-bold text-2xl ">Cart</h1>
        <div className="flex gap-6 justify-center ">
          <h1 className="w-30 p-3 text-lg font-bold">
            Total cost: ${totalPrice}{" "}
          </h1>
          <NavLink
            onClick={() => handleSort("price")}
            className={({isActive}) =>
              ` btn w-32 rounded-full font-semibold ${
                isActive
                  ? "bg-purple-500 text-white"
                  : " border-2 text-purple-500 border-purple-600 "
              }`
            }
          >
            Sort by Price
          </NavLink>
          <NavLink
            className={({isActive}) =>
              ` btn w-32 rounded-full font-semibold ${
                isActive
                  ? "bg-purple-500 text-white"
                  : " border-2 text-purple-500 border-purple-600 "
              }`
            }
          >
            Purchase
          </NavLink>
        </div>
      </div>
      {/*  */}
      <div>
        {product.map((gadget) => (
          <SortCart
            handleRemoved={handleRemoved}
            gadget={gadget}
            key={gadget.product_id}
          ></SortCart>
        ))}
      </div>
    </div>
  );
};

export default Cart;
