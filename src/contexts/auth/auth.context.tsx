import { createContext, FC, useState } from "react";
import { FieldValues } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { COOKIE_VALUE, COOOKIE_NAME } from "../../constants/auth.constant";

export interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  authenticate: () => void;
  login: (data: FieldValues) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export interface IAuthProps {
  children: JSX.Element;
}

export const AuthProvider: FC<IAuthProps> = (props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const authenticate = () => {
    const isCookies = Cookies.get(COOOKIE_NAME);

    if (isCookies) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  const login = (data: FieldValues) => {
    setAuthenticated(true);
    document.cookie = COOKIE_VALUE;
    navigate("/", { replace: true });
  };

  const logout = () => {
    setAuthenticated(false);
    Cookies.remove(COOOKIE_NAME);
    navigate("/");
  };

  const context: IAuthContext = {
    setAuthenticated,
    authenticated,
    authenticate,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
