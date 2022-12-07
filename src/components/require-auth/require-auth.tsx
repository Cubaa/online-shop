import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { COOOKIE_NAME } from "../../constants/auth.constant";
import { IRequireAuthProps } from "./require-auth.interface";

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const cookies = Cookies.get(COOOKIE_NAME);

  return cookies ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};
