import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { GptSearch } from "./GptSearch";
import { useSelector } from "react-redux";

export const Browse = () => {
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
