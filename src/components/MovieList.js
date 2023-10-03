import React from 'react'

import Moviecard from './Moviecard.js';




export const MovieList = ({title , movies}) => {
  
  return (
    <div className='px-2 '>
        <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movies?.map((movie)=>(<Moviecard  key={movie.id} posterPath={movie.poster_path}/>))}
            </div>
       
        </div>
        
    </div>
  )
}
