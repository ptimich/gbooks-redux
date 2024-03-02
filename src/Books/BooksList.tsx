import { BookCard } from "./BookCard";
import { Book } from "../types.ts";
import { searchBooks } from "../api/mockedApiCollection.ts";

const mockedBooks = searchBooks("management");

function BooksList() {
  return (
    <div className="cards">
      {mockedBooks.map((book: Book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export { BooksList };
