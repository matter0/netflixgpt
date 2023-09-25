import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMMovies= () =>{

    const dispatch = useDispatch();
    const getNowPlayingMoview = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        API_OPTION
      );
      const json = await data.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json));
    };
  
    useEffect(() => {
      getNowPlayingMoview();
    }, []);
};

export default useNowPlayingMMovies;