import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layouts/Layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import MultiProductPage from "./pages/multiProductpage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterUser from "./pages/registerUser.jsx";
import SingleProductPage from "./pages/product-page.jsx";
import AdminPage from "./pages/adminPage.jsx";

import { ProductContextProvider } from "./components/context/product-context.jsx";
import { AuthContextProvider } from "./components/context/auth-context.jsx";

/*creating the browser router */
const router = createBrowserRouter([
  {
    path: "/", // First definition of path
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <MultiProductPage />,
      },

      {
        path: "/product/:productId",
        element: <SingleProductPage />,
      },
    ],
  },
  // the login and the signup routes are outside the layout
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterUser />,
  },
  {
    path: "/Admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
