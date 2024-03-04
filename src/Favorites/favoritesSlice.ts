import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Book } from "../types.ts";
import { RootState } from "../store.ts";

const favoritesEntityAdapter = createEntityAdapter<Book>();

const initialState = favoritesEntityAdapter.getInitialState();

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Book>) {
      if (state.ids.includes(action.payload.id)) {
        return favoritesEntityAdapter.removeOne(state, action.payload.id);
      }
      return favoritesEntityAdapter.addOne(state, action.payload);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const { selectAll: getAllFavorites, selectById } =
  favoritesEntityAdapter.getSelectors((state: RootState) => state.favorites);

export const isFavoriteSelector = (state: RootState, id: string) =>
  !!selectById(state, id);
