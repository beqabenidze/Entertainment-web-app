import React from "react";
import data from "../data.json";
import Header from "../Components/header.js";
import Recomended from "../Components/recomended";
import { useEffect, useState } from "react";

function Movies() {
  const dataMovies = data.filter((item) => item.category == "Movie");
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(null);

  useEffect(() => {
    let filter = dataMovies.filter((item) =>
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
          onChange={handleChange}
          type="text"
          placeholder="Search for movies"
        />
        <div className="recomended-div-wrapper">
          <h2>
            {search != "" ? `Found ${found} results for '${search}'` : "Movies"}
          </h2>
          <div className="recomendedDiv">
            {dataMovies.map((movie) => {
              const name = movie.title.toLowerCase();
              const Search = search.toLowerCase();
              if (name.includes(Search)) {
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
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
