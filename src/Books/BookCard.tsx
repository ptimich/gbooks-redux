import "./book.css";
import coverPlaceholderImg from "../assets/cover-placeholder.webp";
import type { Book } from "../types.ts";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
  detailsUrl: string;
}

function BookCard({ book, detailsUrl }: BookCardProps) {
  const { thumbnail, title, subtitle, searchInfo } = book;
  return (
    <article className="book-card">
      <Link to={detailsUrl}>
        <h3>{title}</h3>
      </Link>
      <Link to={detailsUrl} className="book-card__cover book-cover">
        <img src={thumbnail || coverPlaceholderImg} alt="" />
      </Link>
      <h4>{subtitle}</h4>
      <p dangerouslySetInnerHTML={{ __html: searchInfo ?? "" }}></p>
    </article>
  );
}

export { BookCard };
