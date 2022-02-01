import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SAVE_PAYMENT_METHOD": {
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.paylaod },
      };
    }

    case "USER_LOGIN":
      return { ...state, user: action.payload };

    case "USER_LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
