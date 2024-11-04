import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import ProductCard from "../components/Products/ProductCard";
import ProductDetails from "../components/ProductDetails";
import AllProduct from "../components/AllProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../../public/gadgets.json"),
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
