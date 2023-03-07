import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

export default configureStore({
  reducer: counterReducer,
});
