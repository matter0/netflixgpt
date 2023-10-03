import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTION
      );
      const json = await data.json();
      
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      dispatch(addMovieTrailer(trailer));
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
}
export default useMovieTrailer;