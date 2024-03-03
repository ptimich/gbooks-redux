import { BookCard } from "./BookCard";
import { Book } from "../types.ts";
import { useParams } from "react-router-dom";
import { useGetBooksQuery } from "../api/booksApiSlice.ts";

function BooksList() {
  const { searchTerm } = useParams();
  // TODO create loading indicator
  const { data, isError, isLoading, isSuccess } = useGetBooksQuery(searchTerm!);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="cards">
        {data.map((book: Book) => (
          <BookCard
            book={book}
            key={book.id}
            detailsUrl={`/books/${searchTerm}/${book.id}`}
          />
        ))}
      </div>
    );
  }
}

export { BooksList };
