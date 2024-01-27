import React, { useEffect } from 'react'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies)
    const mainMovie = (Array.isArray(movies) && movies?.length>0) ? movies[0] : {}
    const {original_title,overview,id} = mainMovie
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        {!id? <></>:<VideoBackground movieId={id}/>}
    </div>
  )
}

export default MainContainer