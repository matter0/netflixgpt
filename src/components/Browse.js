import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMMovies from "../hooks/useNowPlayingMovies";
import  MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";


export const Browse = () => {
  useNowPlayingMMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};
