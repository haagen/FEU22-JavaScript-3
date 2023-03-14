import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    searchText: "",
    resourceNames: [],
    selectedResource: "",
    searchResults: [],
    next: "",
    showSpinner: false,
  },
  reducers: {
    selectResource: (state, action) => {
      state.selectedResource = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
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
    builder.addCase(searchAPI.pending, (state, action) => {
      state.searchResults = [];
      state.next = "";
      state.showSpinner = true;
    });
    builder.addCase(searchAPI.fulfilled, (state, action) => {
      state.searchResults = action.payload.results;
      state.next = action.payload.next;
      state.showSpinner = false;
    });
    builder.addCase(searchAPI.rejected, (state, action) => {
      state.showSpinner = false;
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

export const searchAPI = createAsyncThunk(
  "swapi/searchAPI",
  async (args, thunkAPI) => {
    let resource = selectSeletedResouce(thunkAPI.getState());
    let searchText = selectSearchText(thunkAPI.getState());
    let response = await fetch(
      `https://swapi.dev/api/${resource}/?search=${searchText}`
    );
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

export const { selectResource, setSearchText } = swapiSlice.actions;
export const selectSearchText = (state) => state.swapi.searchText;
export const selectResouceNames = (state) => state.swapi.resourceNames;
export const selectSeletedResouce = (state) => state.swapi.selectedResource;
export const selectSearchResults = (state) => state.swapi.searchResults;
export const selectShowSpinner = (state) => state.swapi.showSpinner;
export const selectNext = (state) => state.swapi.next;
export default swapiSlice.reducer;
