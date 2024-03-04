import { BookCard } from "./BookCard";
import { Book } from "../types.ts";
import { useParams } from "react-router-dom";
import { useGetBooksQuery } from "../api/booksApiSlice.ts";
import * as React from "react";

const BooksList = React.memo(() => {
  const { searchTerm } = useParams();
  const { data, isError, isSuccess, isFetching } = useGetBooksQuery(
    searchTerm!,
  );

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={`cards ${isFetching ? "is-fetching" : ""}`}>
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
});

export { BooksList };
