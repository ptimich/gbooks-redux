import coverPlaceholderImg from "../assets/cover-placeholder.webp";
import { useParams } from "react-router-dom";
import { getBook } from "../api/mockedApiCollection.ts";
import "./book-details.css";
import { useState } from "react";

function BookDetails() {
  const { id } = useParams();
  if (!id) throw new Error("Bad route config");
  const { thumbnail, title, subtitle, searchInfo } = getBook(id);
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    console.log("Favorite CTA");
    setIsFavorite((prev) => !prev);
  };
  return (
    <section>
      <article className="book-details">
        <header className="book-details__header">
          <h3>{title}</h3>
          <button className="book-details__cta" onClick={toggleFavorite}>
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
