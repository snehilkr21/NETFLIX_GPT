import {API_CONSTANTS} from "../utils/constant"
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from "../utils/movieSlice"
import { useEffect } from "react"
const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_CONSTANTS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}
export default useNowPlayingMovies