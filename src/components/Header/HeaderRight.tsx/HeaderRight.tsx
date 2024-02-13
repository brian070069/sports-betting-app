import React, { useContext, useEffect } from "react";
import NotAuthenticatedLinks from "./NotAuthenticatedLinks";
import AuthenticatedLinks from "./AuthenticatedLinks";
import { AuthContext } from "../../../Context/Auth";

const HeaderRight = () => {
  const { isAuthenticated, setIsAuthenticated }: any = useContext(AuthContext);

  useEffect(() => {
    const phoneNumber = localStorage.getItem("phoneNumber");

    if (!phoneNumber) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <div>
      {isAuthenticated ? <AuthenticatedLinks /> : <NotAuthenticatedLinks />}
    </div>
  );
};

export default HeaderRight;
