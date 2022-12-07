import React, { FC } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../hooks/auth.hook";
import { IRenderLoginProps } from "./render-login.interface";

export const RenderLogin: FC<IRenderLoginProps> = ({ children }) => {
  const { authenticated } = useAuth();
  const location = useLocation();

  return authenticated ? (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
};
