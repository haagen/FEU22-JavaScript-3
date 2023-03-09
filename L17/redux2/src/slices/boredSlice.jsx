import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const boredSlice = createSlice({
  name: "bored",
  initialState: {
    suggestedActivity: "<we do not have an activity yet>",
  },
  extraReducers(builder) {
    builder.addCase(getNewActivity.fulfilled, (state, action) => {
      state.suggestedActivity = action.payload;
    });
    builder.addCase(getNewActivity.pending, (state, action) => {
      state.suggestedActivity = "Laddar...";
    });
  },
});

export const getNewActivity = createAsyncThunk(
  "bored/getNewActivity",
  async () => {
    let response = await fetch("https://www.boredapi.com/api/activity/");
    let data = await response.json();
    return data.activity;
  }
);

export const selectActivity = (state) => state.bored.suggestedActivity;
export default boredSlice.reducer;
