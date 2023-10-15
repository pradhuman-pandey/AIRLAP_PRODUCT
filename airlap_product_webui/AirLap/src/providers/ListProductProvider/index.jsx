// import PropTypes from "prop-types";
import React, { createContext, useReducer } from "react";

import { AppReducer } from "../../reducer";
// import { useProductList } from "../../hooks";

const initialState = {
  cart: [],
  orders: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const [loading,productList] = useProductList();
  const addItemToCartList = (item) => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: item,
    });
  };
  const removeItemToCartList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_TO_CART",
      payload: item,
    });
  };

  const clearItem = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const addItemToOrderList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_ORDER",
      payload: item,
    });
  };

  const removeItemFromOrderList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_ORDER",
      payload: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        orders: state.orders,
        addItemToCartList,
        removeItemToCartList,
        clearItem,
        addItemToOrderList,
        removeItemFromOrderList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
