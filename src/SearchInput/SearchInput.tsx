import { useNavigate, useParams } from "react-router-dom";
import "./search-input.css";
import { useDebouncedInputChangeHandler } from "./useDebouncedInput.ts";

function SearchInput() {
  const { searchTerm: urlSearchTerm } = useParams();
  const navigate = useNavigate();
  const [searchTerm, handleChange] = useDebouncedInputChangeHandler(
    urlSearchTerm,
    (debouncedSearchTerm) => navigate(`/books/${debouncedSearchTerm}`),
  );

  return (
    <div className="search-input">
      <input
        className="input"
        id="search-input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export { SearchInput };
