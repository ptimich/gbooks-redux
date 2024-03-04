import coverPlaceholderImg from "../assets/cover-placeholder.webp";
import { useParams } from "react-router-dom";
import "./book-details.css";
import { useGetBooksQuery } from "../api/booksApiSlice.ts";
import { Book } from "../types.ts";
import { useFavoriteBooks } from "../Favorites/useFavoriteBooks.ts";

function BookDetails() {
  const { searchTerm, id } = useParams();
  if (!id) throw new Error("Bad route config");
  const { book } = useGetBooksQuery(searchTerm!, {
    selectFromResult: (result) => {
      return {
        book: result.data?.find((book) => book.id === id) ?? ({} as Book),
      };
    },
  });

  const { thumbnail, title, subtitle, searchInfo } = book;
  const [isFavorite, toggleFavoriteHandler] = useFavoriteBooks(book);

  return (
    <section>
      <article className="book-details">
        <header className="book-details__header">
          <h3>{title}</h3>
          <button className="book-details__cta" onClick={toggleFavoriteHandler}>
            {isFavorite ? "★" : "☆"}
          </button>
        </header>
        <span className="book-cover ">
          <img src={thumbnail || coverPlaceholderImg} alt="" />
        </span>
        <h4>{subtitle}</h4>
        <p dangerouslySetInnerHTML={{ __html: searchInfo ?? "" }}></p>
      </article>
    </section>
  );
}

export { BookDetails };
