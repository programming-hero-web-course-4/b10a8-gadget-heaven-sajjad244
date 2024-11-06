import React from "react";
import {Link, useLocation} from "react-router-dom";
import {MdDeleteForever} from "react-icons/md";

const SortCart = ({gadget, handleRemoved}) => {
  const {pathname} = useLocation();
  return (
    <div className="flex gap-10 p-5 border-b-1 mb-10 rounded-lg bg-slate-50 justify-start w-5/6 mx-auto relative">
      <div className="w-[150px]">
        <img
          src={gadget.product_image}
          alt={gadget.product_title}
          className="rounded-lg "
        />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg">{gadget.product_title}</h2>
        <p className="font-semibold text-sm">{gadget.description}</p>
        <p className=" font-semibold">Price: ${gadget.price}</p>
        <div className="mt-3"></div>
      </div>
      {(pathname === "/dashboard/wishlist" ||
        pathname === "/dashboard/cart") && (
        <div
          onClick={() => handleRemoved(gadget.product_id)}
          className="text-red-500 text-3xl cursor-pointer p-2 rounded-full absolute -top-5 -right-5"
        >
          <MdDeleteForever></MdDeleteForever>
        </div>
      )}
    </div>
  );
};

export default SortCart;
