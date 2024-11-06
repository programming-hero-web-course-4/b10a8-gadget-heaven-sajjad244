import React, {createContext, useContext, useEffect, useState} from "react";
import toast from "react-hot-toast";
import {getAllProduct, addFavorite, removeFavorite} from "../utilites";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const initialFavorites = getAllProduct();
    setFavoriteItems(initialFavorites);
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const addToFavorites = (item) => {
    const isExist = favoriteItems.some(
      (favItem) => favItem.product_id === item.product_id
    );
    if (!isExist) {
      addFavorite(item);
      setFavoriteItems((prevItems) => [...prevItems, item]);
    } else {
      toast.error("Gadget Already Exists in Favorites!");
    }
  };

  const removeFromFavorites = (id) => {
    removeFavorite(id);
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
