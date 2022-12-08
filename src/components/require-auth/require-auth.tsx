import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IRequireAuthProps } from "./require-auth.interface";
import { useAuth } from "../../hooks/auth.hook";

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const { authenticated } = useAuth();

  return authenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};
