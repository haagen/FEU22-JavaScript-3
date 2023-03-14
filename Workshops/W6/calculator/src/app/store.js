import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../features/counter/calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
