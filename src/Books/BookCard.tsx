import "./book.css";
import coverPlaceholderImg from "../assets/cover-placeholder.webp";
import type { Book } from "../types.ts";
import { MaybeLink } from "../MaybeLink.tsx";

interface BookCardProps {
  book: Book;
  detailsUrl?: string;
}

function BookCard({ book, detailsUrl }: BookCardProps) {
  const { thumbnail, title, subtitle, searchInfo } = book;
  return (
    <article className="book-card">
      <MaybeLink to={detailsUrl}>
        <h3>{title}</h3>
      </MaybeLink>
      <MaybeLink to={detailsUrl} className="book-card__cover book-cover">
        <img src={thumbnail || coverPlaceholderImg} alt="" />
      </MaybeLink>
      <h4>{subtitle}</h4>
      <p dangerouslySetInnerHTML={{ __html: searchInfo ?? "" }}></p>
    </article>
  );
}

export { BookCard };
