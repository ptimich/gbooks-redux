import coverPlaceholderImg from "../assets/cover-placeholder.webp";
import { useParams } from "react-router-dom";
import { getBook } from "../api/mockedApiCollection.ts";

function BookDetails() {
  const { id } = useParams();
  if (!id) throw new Error("Bad route config");
  const { thumbnail, title, subtitle, searchInfo } = getBook(id);
  return (
    <section>
      <article className="book-card">
        <h3>{title}</h3>
        <span className="book-cover book-card__cover">
          <img src={thumbnail || coverPlaceholderImg} alt="" />
        </span>
        <h4>{subtitle}</h4>
        <p dangerouslySetInnerHTML={{ __html: searchInfo ?? "" }}></p>
      </article>
    </section>
  );
}

export { BookDetails };
