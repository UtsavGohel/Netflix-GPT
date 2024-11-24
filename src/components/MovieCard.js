import React from "react";
import { TMDB_IMAGE_CDN_URL } from "../utils/const";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={TMDB_IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
