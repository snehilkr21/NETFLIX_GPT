import React from 'react'
import MovieCard from './MovieCard'
function MovieList({title,movies}) {
  return (
    <div className='px-6 '>
        <h1 className='text-2xl py-6 text-white'>
            {title}
        </h1>
        <div className='flex overflow-x-scroll'>
            
            <div className='flex'>
                {
                    (Array.isArray(movies)&& movies?.length>0 && movies?.map((movie)=>{
                        return(
                            <>
                             <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
                            </>
                        )
                    }))
                }
                
            </div>
        </div>
    </div>
  )
}

export default MovieList