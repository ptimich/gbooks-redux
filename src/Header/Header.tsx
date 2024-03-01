import "./header.css";
import reduxLogo from "/redux.svg";

function Header() {
  return (
    <div className="header">
      <img src={reduxLogo} className="logo" alt="Redux logo" />
      <h1 className="header__title">Google Books</h1>
      <ul className="header__menu">
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Favorites</a>
        </li>
      </ul>
    </div>
  );
}

export { Header };
