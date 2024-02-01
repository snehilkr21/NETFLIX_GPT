import {API_CONSTANTS} from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux'
import {addNowPlayingMovies} from "../utils/movieSlice"
import { useEffect } from "react"
const useNowPlayingMovies = () =>{
    const nowPlayingMovies = useSelector((store)=>store?.movies?.nowPlayingMovies)
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_CONSTANTS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        nowPlayingMovies?.length == 0 && getNowPlayingMovies()
    },[])
}
export default useNowPlayingMovies