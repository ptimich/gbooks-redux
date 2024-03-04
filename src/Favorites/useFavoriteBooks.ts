import { Book } from "../types.ts";
import { useAppDispatch, useAppSelector } from "../reduxHooks.ts";
import { isFavoriteSelector, toggleFavorite } from "./favoritesSlice.ts";

function useFavoriteBooks(book: Book) {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    isFavoriteSelector(state, book.id),
  );
  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(book));
  };

  return [isFavorite, toggleFavoriteHandler] as const;
}

export { useFavoriteBooks };
