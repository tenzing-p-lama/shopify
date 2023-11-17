import "./Header.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/shopify_logo_black.png";
import notification from "../../assets/icons/Ringing Bell Notification.svg";
import search from "../../assets/icons/SearchMinor.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" className="header-logo__img" />
      </div>

      <div className="header-search">
        <label htmlFor="search" className="header-search__icon">
          <img
            src={search}
            alt="search icon"
            className="header-search__icon-img"
          />
        </label>
        <input
          className="header-searchbar"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search"
        />
      </div>

      <div className="header-right">
        <img src={notification} alt="notification icon" />

        <section className="header-avatar">
          <div className="header-avatar__grey">MS</div>
        </section>

        <section className="header-info">
          <p className="header-info__company">Merry Cosmetics</p>
          <p className="header-info__user">Katie S</p>
        </section>
      </div>
    </header>
  );
}
export default Header;
