import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./slices/counterSlice";
import boredSliceReducer from "./slices/boredSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    bored: boredSliceReducer,
  },
});
