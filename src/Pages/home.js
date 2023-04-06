import React, { useEffect, useState } from "react";
import data from "../data.json";
import Header from "../Components/header";
import Recomended from "../Components/recomended";
import Trending from "../Components/trending.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  const dataTrending = data.filter((item) => item.isTrending);
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
          onChange={handleChange}
          value={search}
          type="text"
          placeholder="Search for movies or TV series"
        />
        {search == "" ? (
          <div className="trending-div-wrapper">
            <h2>Trending</h2>

            <Swiper
              slidesPerView={"1.8"}
              spaceBetween={10}
              className="mySwiper"
            >
              {dataTrending.map((movie) => {
                return (
                  <SwiperSlide key={movie.title + movie.category + "trending"}>
                    <Trending
                      movie={movie}
                      title={movie.title}
                      key={movie.title + movie.category}
                      year={movie.year}
                      category={movie.category}
                      rating={movie.rating}
                      name={movie.title}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : null}
        <div className="recomended-div-wrapper">
          <h2>
            {search != ""
              ? `Found ${found} results for '${search}'`
              : "Recommended"}
          </h2>
          <div className="recomendedDiv">
            {data.map((movie) => {
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

export default Home;
