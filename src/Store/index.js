import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./Contador";
import carrinhoReducer from './Carrinho';
export const store = configureStore({
  reducer: {
    contador: contadorReducer,
    carrinho: carrinhoReducer
  }
});