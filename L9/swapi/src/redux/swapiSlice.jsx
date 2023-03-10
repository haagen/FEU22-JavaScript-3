import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    resourceNames: [],
    selectedResource: "",
    searchResults: [],
    next: "",
  },
  reducers: {
    selectResource: (state, action) => {
      state.selectedResource = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadResources.fulfilled, (state, action) => {
      state.resourceNames = action.payload;
    });
    builder.addCase(searchResource.fulfilled, (state, action) => {
      state.searchResults = action.payload.results;
      state.next = action.payload.next;
    });
    builder.addCase(loadMore.fulfilled, (state, action) => {
      state.searchResults = state.searchResults.concat(action.payload.results);
      state.next = action.payload.next;
    });
  },
});

export const loadResources = createAsyncThunk(
  "swapi/loadResources",
  async () => {
    let response = await fetch("https://swapi.dev/api/");
    let data = await response.json();
    return Object.keys(data);
  }
);

export const searchResource = createAsyncThunk(
  "swapi/searchResource",
  async (args, thunkAPI) => {
    let resource = selectSeletedResouce(thunkAPI.getState());
    let response = await fetch(`https://swapi.dev/api/${resource}`);
    let data = await response.json();
    return data;
  }
);

export const loadMore = createAsyncThunk(
  "swapi/loadMore",
  async (args, thunkAPI) => {
    let nextUrl = selectNext(thunkAPI.getState());
    let response = await fetch(nextUrl);
    let data = await response.json();
    return data;
  }
);

export const { selectResource } = swapiSlice.actions;
export const selectResouceNames = (state) => state.swapi.resourceNames;
export const selectSeletedResouce = (state) => state.swapi.selectedResource;
export const selectSearchResults = (state) => state.swapi.searchResults;
export const selectNext = (state) => state.swapi.next;
export default swapiSlice.reducer;
