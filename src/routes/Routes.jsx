import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import ProductCard from "../components/Products/ProductCard";
import ProductDetails from "../components/ProductDetails";
import AllProduct from "../components/AllProduct";
import Cart from "../components/Cart";
import WishList from "../components/WishList";
import ErrorPage from "../Pages/ErrorPage";
import Locations from "../Pages/Locations";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("../../public/category.json"),
        children: [
          {
            path: "/",
            element: <ProductCard></ProductCard>,
            loader: () => fetch("../../public/gadgets.json"),
          },
          {
            path: "/category/:categoryProduct",
            element: <ProductCard></ProductCard>,
            loader: () => fetch("../../public/gadgets.json"),
          },
        ],
      },
      {
        path: "location",
        element: <Locations></Locations>,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList></WishList>,
          },
        ],
      },

      {
        path: "/allProduct",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("../../public/gadgets.json"),
      },
      {
        path: "/allProduct/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../../public/gadgets.json"),
      },
    ],
  },
]);

export default routes;
