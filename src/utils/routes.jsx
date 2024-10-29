import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import HomePage from "../pages/homePage/homePage";
import Layout from "../components/layout";
import SigninPage from "../pages/signinPage/signinPage";
import UserPage from "../pages/userPage/userPage";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "sign-in",
          element: <SigninPage />,
        },
        { path: "profile", element: <UserPage /> },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;
