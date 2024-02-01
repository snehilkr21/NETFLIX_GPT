import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movieList = useSelector((store)=>store?.movies?.nowPlayingMovies)
  const popularVideo = useSelector((store)=>store?.movies?.popularVideos)
  return (
    <div className="bg-black -mt-40 relative z-20">
      <div className="">
        <MovieList title={"Now Playing"} movies={movieList}/>
        <MovieList title={"Most Popular"} movies={popularVideo}/>
      </div>
    </div>
  )
}

export default SecondaryContainer