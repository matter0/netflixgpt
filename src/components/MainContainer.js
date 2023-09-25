import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import { VideoBackground } from './VideoBackground'

const MainContainer = () => {
    const movies=useSelector((store) =>store.movies?.nowPlayinMovies);
    if(!movies ) return;
    
    const mainMovie=movies.results[0];
    
    const {original_title, overview,id} =mainMovie;
  return (
    <div>
        <Videotitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
