import React, { useContext } from "react";
import AuthContext from "./context/authContext";
const Auth = () => {
  const authContext = useContext(AuthContext);
  const { loginuser } = authContext;

  const handleClick = () => {
    loginuser();
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Auth;
