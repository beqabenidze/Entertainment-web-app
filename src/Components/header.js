import React from "react";
import "../Pages/home.css";
import logo from "../Icons/logo.svg";
import navbarHome from "../Icons/icon-nav-home.svg";
import navbarTvSeries from "../Icons/icon-nav-tv-series.svg";
import navbarMovies from "../Icons/icon-nav-movies.svg";
import navbarBookmark from "../Icons/icon-nav-bookmark.svg";
import avatar from "../Icons/image-avatar.png";

function Header() {
  return (
    <header>
      <a href="/Home">
        <img src={logo} />
      </a>
      <div className="headerImg">
        <a href="/Home">
          <img src={navbarHome}></img>
        </a>
        <a href="/Series">
          <img src={navbarTvSeries}></img>
        </a>
        <a href="/Movies">
          <img src={navbarMovies}></img>
        </a>
        <a href="/Bookmarked">
          <img src={navbarBookmark}></img>
        </a>
      </div>
      <a href="/">
        <img className="avatar" src={avatar} />
      </a>
    </header>
  );
}
export default Header;
