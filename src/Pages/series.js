import React from "react";
import data from "../data.json";
import Header from "../Components/header.js";
import Recomended from "../Components/recomended";
import { useEffect, useState } from "react";

function Series() {
  const dataSeries = data.filter((item) => item.category == "TV Series");
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(null);

  useEffect(() => {
    let filter = dataSeries.filter((item) =>
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
          placeholder="Search for TV series"
        />
        <div className="recomended-div-wrapper">
          <h2>
            {search != ""
              ? `Found ${found} results for '${search}'`
              : "Tv Series"}
          </h2>
          <div className="recomendedDiv">
            {dataSeries.map((series) => {
              let name = series.title.toLocaleLowerCase();
              let Search = search.toLocaleLowerCase();
              if (name.includes(Search)) {
                return (
                  <Recomended
                    movie={series}
                    title={series.title}
                    key={series.title + series.category}
                    year={series.year}
                    category={series.category}
                    rating={series.rating}
                    name={series.title}
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

export default Series;
