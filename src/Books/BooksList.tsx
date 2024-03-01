import { BookCard } from "./BookCard";
import { bookMapper } from "./utils.ts";
import mockedBooks from "../api/mockedResponseManagement.ts";
import { Book } from "../types.ts";

const page1Books = mockedBooks.items.map(bookMapper);

function BooksList() {
  return (
    <div className="app__main cards">
      {page1Books.map((book: Book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export { BooksList };
