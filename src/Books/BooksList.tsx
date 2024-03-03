import { BookCard } from "./BookCard";
import { Book, searchTerm } from "../types.ts";
import { searchBooks } from "../api/mockedApiCollection.ts";
import { useParams } from "react-router-dom";

function BooksList() {
  const { searchTerm } = useParams();
  // TODO fetch from real api
  const mockedBooks = searchBooks(searchTerm as searchTerm);
  return (
    <div className="cards">
      {mockedBooks.map((book: Book) => (
        <BookCard
          book={book}
          key={book.id}
          detailsUrl={`/books/${searchTerm}/${book.id}`}
        />
      ))}
    </div>
  );
}

export { BooksList };
