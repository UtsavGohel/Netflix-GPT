import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/const";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img className="absolute -z-10" alt="logo" src={BACKGROUND_IMG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
