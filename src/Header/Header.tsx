import "./header.css";
import reduxLogo from "/redux.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../SearchInput/searchTermSlice.ts";

function Header() {
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className="header">
      <img src={reduxLogo} className="logo" alt="Redux logo" />
      <h1 className="header__title">Google Books</h1>
      <ul className="header__menu">
        <li>
          <NavLink to={`/books/${searchTerm ?? ""}`}>Search</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
}

export { Header };
