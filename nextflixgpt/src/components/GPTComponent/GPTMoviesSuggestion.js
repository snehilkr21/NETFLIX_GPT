import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../SecondaryContainerVideo/MovieList"
const GPTMoviesSuggestion = () => {
  const {movieResults,movieName} = useSelector((store)=>store?.gpt)
  if(!movieName && !movieResults) return null;

  return (
    <div className='p-4 m-4 text-white bg-opacity-90'>
        <div>
          {
            movieName?.map((e,index)=>{
              return(
                <MovieList key={e} title={e} movies={movieResults?.[index]} />
              )
            })
          }
        </div>
    </div>
  )
}

export default GPTMoviesSuggestion