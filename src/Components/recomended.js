import React, { useEffect, useState } from "react";
import bookmarkEmpty from "../Icons/icon-bookmark-empty.svg";
import bookmarkFull from "../Icons/icon-bookmark-full.svg";
import data from "../data.json";
import play from "../Icons/icon-play.svg";
import categoryMovie from "../Icons/icon-category-movie.svg";
import categoryTV from "../Icons/icon-category-tv.svg";

function Recomended(props) {
  const [bookmarked, setBookmarked] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    let name = props.movie.title
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("’", "")
      .replaceAll("ii", "2")
      .replaceAll(":", "");
    let photo = require(`../assets/thumbnails/${name}/regular/large.jpg`);
    setImage(photo);
  }, [props.movie.title]);

  return (
    <div className="recomended" style={{ backgroundImage: `url(${image})` }}>
      <div className="bookmarkDiv">
        <img
          className="bookmark"
          onClick={() => setBookmarked(!bookmarked)}
          src={bookmarked ? bookmarkFull : bookmarkEmpty}
        />
      </div>
      <div className="recomendedInfo">
        <ul>
          <li>{props.year}</li>
          <li>
            <img src={props.category == "Movie" ? categoryMovie : categoryTV} />
            <span>{props.category}</span>
          </li>
          <li>{props.rating}</li>
        </ul>
        <h3>{props.name}</h3>
      </div>
      <div className="play-recomended">
        <img src={play} />
        <h3>Play</h3>
      </div>
    </div>
  );
}

export default Recomended;
