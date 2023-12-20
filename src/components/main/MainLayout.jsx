import React from "react";
import { Home, SignIn, Browse } from "../../pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Header from "../Header";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      path: `${ROUTES.HOME}`,
      element: <Home />,
    },
    {
      path: `${ROUTES.SIGN_IN}`,
      element: <SignIn />,
    },
    {
      path: `${ROUTES.BROWSE}`,
      element: <Browse />,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Main;
