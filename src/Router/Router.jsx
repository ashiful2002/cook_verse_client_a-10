import { createBrowserRouter } from "react-router"; // ✅ use 'react-router-dom'
import App from "../App";
import RootLayout from "../Layout/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "app",
        element: <App />,
      },
    ],
  },
]);

export default router;
