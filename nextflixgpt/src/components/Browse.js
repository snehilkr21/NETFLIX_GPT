import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopular from "../hooks/usePopular"
import MainContainer from './MainConatinerVideo/MainContainer'
import SecondaryContainer from './SecondaryContainerVideo/SecondaryContainer'
const Browse = () => {
  useNowPlayingMovies()
  usePopular()
  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse