import React, { useReducer } from "react";
import authReducers from "./authReducers";
import AuthContext from "./authContext";
import { LOGIN_USER } from "./types";
const AuthState = props => {
  const intialState = {
    isAutenticated: false,
    loading: false
  };

  const [state, dispatch] = useReducer(authReducers, intialState);
  const loginuser = () => {
    dispatch({
      type: LOGIN_USER,
      payload: true
    });
  };
  return (
    <AuthContext.Provider
      value={{
        isAutenticated: state.isAutenticated,
        loginuser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
