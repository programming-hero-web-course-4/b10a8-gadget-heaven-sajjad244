import React, {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import Product from "./Product";

const ProductCard = () => {
  const gadgets = useLoaderData();
  const {categoryProduct} = useParams();
  const [gadgetTypes, setGadgetsTypes] = useState([]);
  useEffect(() => {
    if (categoryProduct) {
      const filtersByGadgetTypes = [...gadgets].filter(
        (gadget) => gadget.category == categoryProduct
      );
      setGadgetsTypes(filtersByGadgetTypes);
    } else {
      setGadgetsTypes(gadgets.slice(0, 6));
    }
  }, [categoryProduct, gadgets]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {gadgetTypes.map((gadget) => (
        <Product gadget={gadget} key={gadget.product_id}></Product>
      ))}
    </div>
  );
};

export default ProductCard;
