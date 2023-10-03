import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { LOGO } from "../utils/constant";

export const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
      <img src={LOGO} alt='img' className=''/>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
