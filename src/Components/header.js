import React from "react";
import "../Pages/home.css";
import logo from "../Icons/logo.svg";
import navbarHome from "../Icons/icon-nav-home.svg";
import navbarTvSeries from "../Icons/icon-nav-tv-series.svg";
import navbarMovies from "../Icons/icon-nav-movies.svg";
import navbarBookmark from "../Icons/icon-nav-bookmark.svg";
import avatar from "../Icons/image-avatar.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/Entertainment-web-app/Home">
        <img src={logo} />
      </Link>
      <div className="headerImg">
        <Link to="/Entertainment-web-app/Home">
          <img src={navbarHome} />
        </Link>
        <Link to="/Entertainment-web-app/Series">
          <img src={navbarTvSeries} />
        </Link>
        <Link to="/Entertainment-web-app/Movies">
          <img src={navbarMovies} />
        </Link>
        <Link to="/Entertainment-web-app/Bookmarked">
          <img src={navbarBookmark} />
        </Link>
      </div>
      <Link to="/Entertainment-web-app/">
        <img className="avatar" src={avatar} />
      </Link>
    </header>
  );
}
export default Header;
