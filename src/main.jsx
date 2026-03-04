import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/mainlayout";
import App from "./App";
import ProductDetail from "./pages/productdetail";
import Axios from "./config/axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: async ({ params }) => {
          const res = await Axios.get(`/products/${params.id}`);
          return res.data;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);