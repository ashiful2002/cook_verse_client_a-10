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
import ALl2 from "./Pages/AllRecipe/All2.jsx";
import About from "./Pages/About/About.jsx";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout.jsx";
import Overview from "./Layout/DashboardLayout/Overview/Overview.jsx";
import AllItems from "./Layout/DashboardLayout/Overview/AllItems.jsx";
import MyItems from "./Layout/DashboardLayout/Overview/MyItems.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    // ErrorBoundary: ErrorPage,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("https://a10-book-server-app.vercel.app/recipes"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/about",
        Component: About,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/all-recipe",
        Component: ALl2,
        loader: () => fetch("https://a10-book-server-app.vercel.app/recipes"),
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
          fetch(`https://a10-book-server-app.vercel.app/recipes/${params.id}`),
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
        element: (
          <PrivateRoute>
            <MyRecipe />
          </PrivateRoute>
        ),
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
        loader: () => fetch("https://a10-book-server-app.vercel.app/recipes"),
      },

      {
        path: "my-recipe",
        element: <MyItems />,
        loader: () => fetch("https://a10-book-server-app.vercel.app/recipes"),
      },
      {
        path: "all-recipe",
        element: <AllItems />,
        loader: () => fetch("https://a10-book-server-app.vercel.app/recipes"),
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
