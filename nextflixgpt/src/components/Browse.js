import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopular from "../hooks/usePopular"
import MainContainer from './MainConatinerVideo/MainContainer'
import SecondaryContainer from './SecondaryContainerVideo/SecondaryContainer'
import GPTSearch from './GPTComponent/GPTSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  const showGptSearch = useSelector((store)=>store?.gpt?.showGptSearch)
  useNowPlayingMovies()
  usePopular()
  return (
    <div>
        <Header/>
        <>
        {
          !showGptSearch
          ?
          <>
           <MainContainer/>
           <SecondaryContainer/>
          </>
          :
          <GPTSearch/>
        }
        
        </>
    </div>
  )
}

export default Browse