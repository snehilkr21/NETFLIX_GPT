import React,{useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from "../../utils/LanguageConstant"
import openai from "../../utils/openai"
import {API_CONSTANTS} from "../../utils/constant"
import {addGptMovieResult} from "../../utils/gptSlice"
const GPTSearchInputBox = () => {
  const dispatch = useDispatch()
  const searchText = useRef("")
  const selectedLang = useSelector((store)=>store?.config?.lang)

  //search movie in TMDB
  const searchMovieTMDB = async (movie) =>{
     let data =await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_CONSTANTS)
     data = await data?.json()
     return data?.results
  }

  const handleGPTSearcClick = async () =>{

    const gptQuery = "Act as a Movie Recommendation systaem and suggest some movies for the query : " 
                     + searchText?.current?.value 
                     + ". only give me names of 5 movies, comma seperatedlike the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, koi mill gaya ";
     //Make an gpt api call to get movieList
     const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
     });

     const gptMovies = chatCompletion?.choices?.[0]?.message?.content?.split(",")

     //for each movie I willsearch in TMDB API
     //here we will receive array of 5 promises.
     const promiseArray = gptMovies?.map((movie)=> searchMovieTMDB(movie))
     const tmdbResults = await Promise.all(promiseArray)
     dispatch(addGptMovieResult({movieName : gptMovies, movieResults:tmdbResults}))
  }

  return (
    <div className='pt-[20%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[selectedLang].gptSearchPlaceholder}/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'
              onClick={handleGPTSearcClick}
            >
              {lang[selectedLang].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchInputBox