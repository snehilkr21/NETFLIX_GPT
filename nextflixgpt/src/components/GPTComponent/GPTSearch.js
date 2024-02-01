import React from 'react'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'
import GPTSearchInputBox from './GPTSearchInputBox'
import {loginBackgroundPhoto} from "../../utils/constant"
const GPTSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
           <img
             src={loginBackgroundPhoto}
             alt="Background_Image"
            />
        </div>
        <GPTSearchInputBox/>
        <GPTMoviesSuggestion/>
    </div>
  )
}

export default GPTSearch