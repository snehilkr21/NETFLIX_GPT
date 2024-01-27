import React from 'react'
import {Image_CDN_URL} from "../../utils/constant"
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
            <img 
            src={Image_CDN_URL+posterPath}
            alt="Movie_Card"
            />
    </div>
  )
}

export default MovieCard