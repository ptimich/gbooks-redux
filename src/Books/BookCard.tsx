import "./book.css";
import coverPlaceholderImg from "../assets/cover-placeholder.webp";
import type { Book } from "../types.ts";

function BookCard({ book }: { book: Book }) {
  const { thumbnail, title, subtitle, searchInfo } = book;
  return (
    <article className="book-card">
      <h3>{title}</h3>
      <img
        className="book-card__cover"
        src={thumbnail || coverPlaceholderImg}
        alt=""
      />
      <h4>{subtitle}</h4>
      <p dangerouslySetInnerHTML={{ __html: searchInfo ?? "" }}></p>
    </article>
  );
}

export { BookCard };
