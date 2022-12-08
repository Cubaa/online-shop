import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/home/home";
import { Layout } from "./components/layout/layout";
import { Login } from "./components/login/login";
import { Products } from "./components/products/products";
import { RenderLogin } from "./components/render-login/render-login";
import { RequireAuth } from "./components/require-auth/require-auth";
import { AuthProvider } from "./contexts/auth/auth.context";
import { ShoppingCartProvider } from "./contexts/shopping-cart/shopping-cart.context";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ShoppingCartProvider>
            <Layout />
          </ShoppingCartProvider>
        </AuthProvider>
      </QueryClientProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <RenderLogin>
            <Login />
          </RenderLogin>
        ),
      },
      {
        path: "/products",
        element: (
          <RequireAuth>
            <Products />
          </RequireAuth>
        ),
      },
      {
        path: "*",
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
