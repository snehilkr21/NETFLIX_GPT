import {API_CONSTANTS} from "../utils/constant"
import { useDispatch } from 'react-redux'
import {addPopularVideos} from "../utils/movieSlice"
import { useEffect } from "react"
const usePopular = () =>{
    const dispatch = useDispatch()
    const getPopular = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_CONSTANTS)
        const json = await data.json()
        dispatch(addPopularVideos(json.results))
    }
    useEffect(()=>{
        getPopular()
    },[])
}
export default usePopular