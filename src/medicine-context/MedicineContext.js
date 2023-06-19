import React, { createContext, useReducer } from "react";

const MedicineContext = createContext();

const stockReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const index = state.stock.findIndex(
        (medicine) => medicine.name === action.item.name
      );
      if (index === -1) {
        return { ...state, stock: [...state.stock, action.item] };
      } else {
        const medicineToBeUpdated = state.stock[index];
        const updatedMedicine = {
          ...medicineToBeUpdated,
          availability:
            medicineToBeUpdated.availability + action.item.availability,
        };
        const updatedStock = [...state.stock];
        updatedStock.splice(index, 1, updatedMedicine);
        return { ...state, stock: updatedStock };
      }

    case "REMOVE":
      const indexToModify = state.stock.findIndex(
        (medicine) => medicine.name === action.item.name
      );
      const modifiedQuantity = {
        ...state.stock[indexToModify],
        availability: state.stock[indexToModify].availability - 1,
      };
      const modifiedStock = [...state.stock];
      modifiedStock.splice(indexToModify, 1, modifiedQuantity);
      return { ...state, stock: modifiedStock };

    default:
      return state;
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingItemIndex = state.cart.findIndex(
        (medicine) => medicine.name === action.item.name
      );

      if (existingItemIndex === -1) {
        return {
          ...state,
          totalMedicines: state.totalMedicines + 1,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
        };
      }

      return {
        ...state,
        totalMedicines: state.totalMedicines + 1,
        cart: state.cart.map((medicine, index) =>
          index === existingItemIndex
            ? { ...medicine, quantity: medicine.quantity + 1 }
            : medicine
        ),
      };

    default:
      return state;
  }
};

export const Medicines = (props) => {
  const addToStockHandler = (medicine) => {
    stockDispatch({ type: "ADD", item: medicine });
  };

  const removeFromStockHandler = (medicine) => {
    stockDispatch({ type: "REMOVE", item: medicine });
    cartDispatch({ type: "ADD", item: medicine });
  };

  const addToCartHandler = (medicine) => {};

  const removeFromCartHandler = (medicine) => {};

  const [medicineStock, stockDispatch] = useReducer(stockReducer, {
    stock: [],
    addToStock: addToStockHandler,
    removeFromStock: removeFromStockHandler,
  });

  const [medicineCart, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    totalMedicines: 0,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  });

  return (
    <MedicineContext.Provider value={{ medicineStock, medicineCart }}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContext;
