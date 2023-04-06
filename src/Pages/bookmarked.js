import React, { useEffect, useState } from "react";
import data from "../data.json";
import "./home.css";
import Header from "../Components/header.js";
import Recomended from "../Components/recomended";

function Bookmarked() {
  const dataBookmarked = data.filter((item) => item.isBookmarked);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(null);

  useEffect(() => {
    let filter = data.filter((item) =>
      item.title.toLocaleLowerCase().includes(search)
    );
    setFound(filter.length);
  }, [search]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div className="MainHome">
      <Header />
      <div className="main">
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Search for bookmarked shows"
        />
        <div className="recomended-div-wrapper">
          <h2>
            {search != ""
              ? `Found ${found} results for '${search}'`
              : "Bookmarked"}
          </h2>
          <div className="recomendedDiv">
            {dataBookmarked.map((movie) => {
              return (
                <Recomended
                  movie={movie}
                  title={movie.title}
                  key={movie.title + movie.category}
                  year={movie.year}
                  category={movie.category}
                  rating={movie.rating}
                  name={movie.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmarked;
