import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layout/RootLayout/RootLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import AllRecipe from "./Pages/AllRecipe/AllRecipe.jsx";
import AddRecipe from "./Pages/AddRecipe/AddRecipe.jsx";
import MyRecipe from "./Pages/MyRecipe/MyRecipe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/all-recipe",
        Component: AllRecipe,
      },
      {
        path: "/add-recipe",
        Component: AddRecipe,
      },
      {
        path: "/my-recipe",
        Component: MyRecipe,
      },
      {
        path: "signin",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  </StrictMode>
);
