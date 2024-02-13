import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const Auth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;

export const useAuth = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated }: any = useContext(AuthContext);

  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber");

    if (!phoneNumber) {
      setIsAuthenticated(false);
      navigate("/login");
      return;
    }
    setIsAuthenticated(true);
  }, []);
};
