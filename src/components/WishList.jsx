import React, {useEffect, useState} from "react";
import {getAllProduct, removeFavorite} from "../utilites";
import MiniCard from "./MiniCard";
import toast from "react-hot-toast";

const WishList = () => {
  // from context api

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const favorites = getAllProduct(); //came from local-storage
    setProduct(favorites);
  }, []);

  const handleRemoved = (id) => {
    removeFavorite(id);
    const favorites = getAllProduct(); //came from local-storage
    setProduct(favorites);
    toast.success("Successfully Removed!");
  };

  return (
    <div>
      <h1 className="w-36 p-5 font-bold text-2xl mt-5">WishList</h1>
      <div>
        {product.map((gadget) => (
          <MiniCard
            handleRemoved={handleRemoved}
            gadget={gadget}
            key={gadget.product_id}
          ></MiniCard>
        ))}
      </div>
    </div>
  );
};
export default WishList;
