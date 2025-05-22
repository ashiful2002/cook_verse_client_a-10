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
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import Details from "./Pages/Details/Details.jsx";

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
        loader: () => fetch("http://localhost:3000/recipes"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/all-recipe",
        Component: AllRecipe,
        loader: () => fetch("http://localhost:3000/recipes"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipes/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <Loading />,
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
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer closeOnClick />
    </AuthProvider>
  </StrictMode>
);
