import { LOGIN_USER } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAutenticated: true
      };
    default:
      return state;
  }
};
