import { BookCard } from "../Books/BookCard";
import { useAppSelector } from "../reduxHooks.ts";
import { getAllFavorites } from "./favoritesSlice.ts";
import { Book } from "../types.ts";

function FavoriteBooksList() {
  const favBooks = useAppSelector(getAllFavorites);

  if (favBooks.length === 0) {
    return (
      <div>
        <h1>No favorites yet</h1>
      </div>
    );
  }

  return (
    <div className="cards">
      {favBooks.map((book: Book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export { FavoriteBooksList };
