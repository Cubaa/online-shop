import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/home/home";
import { Layout } from "./components/layout/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
