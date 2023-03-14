import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentValue: 0,
  nextValue: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.nextValue *= 10;
      state.nextValue += action.payload;
    },
    addition: (state) => {
      state.currentValue += state.nextValue; // state.currentValue = state.currentValue + state.nextValue
      state.nextValue = 0;
    },
    subtraction: (state) => {
      state.currentValue -= state.nextValue;
      state.nextValue = 0;
    },
    multiplication: (state) => {
      state.currentValue *= state.nextValue;
      state.nextValue = 0;
    },
    division: (state) => {
      state.currentValue /= state.nextValue;
      state.nextValue = 0;
    },
    clear: (state) => {
      state.currentValue = 0;
      state.nextValue = 0;
    },
  },
});

export const {
  addNumber,
  addition,
  subtraction,
  multiplication,
  division,
  clear,
} = calculatorSlice.actions;

export const selectCurrentValue = (state) => state.calculator.currentValue;
export const selectNextValue = (state) => state.calculator.nextValue;

export default calculatorSlice.reducer;
