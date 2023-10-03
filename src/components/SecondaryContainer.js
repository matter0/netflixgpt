import React from 'react'
import { useSelector } from 'react-redux'
import { MovieList } from './MovieList';

export const SecondaryContainer = () => {
  const movies=useSelector(store => store.movies);

  return (
    movies?.nowPlayinMovies && (
      <div className='bg-black'>
        <div className='-mt-56 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayinMovies?.results}/>
          <MovieList title={"popular"} movies={movies?.popularMovies?.results}/>
          <MovieList title={"In comedy"} movies={movies.nowPlayinMovies?.results}/>
          <MovieList title={"Award Winning"} movies={movies.nowPlayinMovies?.results}/>
          <MovieList title={"Time Killer"} movies={movies.nowPlayinMovies?.results}/>
        </div>
      </div>
    )
  )
}
