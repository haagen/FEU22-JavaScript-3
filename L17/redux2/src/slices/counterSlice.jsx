import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    remove: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addDelayedCount.fulfilled, (state, action) => {
      console.log(action);
      state.value += action.payload;
    });
  },
});

export const addDelayedCount = createAsyncThunk("counter", (data) => {
  console.dir(data);
  // data = { delay, count }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Timeout");
      resolve(data.count);
    }, data.delay * 1000);
  });
});

export const { add, remove } = counterSlice.actions;
export const selectValue = (state) => state.counter.value;
export default counterSlice.reducer;
