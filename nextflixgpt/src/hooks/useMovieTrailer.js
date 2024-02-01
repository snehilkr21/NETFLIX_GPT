import {API_CONSTANTS} from "../utils/constant"
import {addTrailerVideos} from "../utils/movieSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
const useMovieTrailer = ({movieId}) =>{
    const dispatch = useDispatch()
    const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo)
    const getMovieVideo = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${!movieId ? `976573` : movieId}/videos?language=en-US`, API_CONSTANTS)
        const json = await data.json()
        const filterTrailer = json?.results?.filter((e)=>{
            if(e?.type === "Trailer"){
            return e
            }
        })
        const trailer = (Array.isArray(filterTrailer) && filterTrailer?.lenght>0) ? filterTrailer[0] : json?.results[0]
        dispatch(addTrailerVideos(trailer))
    }
    useEffect(()=>{
        Object.keys(trailerVideo)?.length==0 && getMovieVideo()
    },[])
  }
  export default useMovieTrailer