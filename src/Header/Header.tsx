import "./header.css";
import reduxLogo from "/redux.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={reduxLogo} className="logo" alt="Redux logo" />
      <h1 className="header__title">Google Books</h1>
      <ul className="header__menu">
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
}

export { Header };
