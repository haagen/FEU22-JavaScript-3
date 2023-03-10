import { configureStore } from "@reduxjs/toolkit";
import swapiSliceReducer from "./swapiSlice";
export const store = configureStore({
  reducer: {
    swapi: swapiSliceReducer,
  },
});
