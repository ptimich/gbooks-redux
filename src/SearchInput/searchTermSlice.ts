import { createSlice } from "@reduxjs/toolkit";
import { booksApiSlice } from "../api/booksApiSlice.ts";
import { RootState } from "../store.ts";

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      booksApiSlice.endpoints?.getBooks.matchFulfilled,
      (_state, { meta }) => {
        return meta.arg.originalArgs ?? "";
      },
    );
  },
});

export const selectSearchTerm = (state: RootState) => state.searchTerm;
