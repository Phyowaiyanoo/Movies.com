
import { Actiontype } from "../Action-type"

export const  fetchMovies= (movies) => {
    return {
        type :Actiontype.FETCH_MOVIES ,
        payload : movies
    }
}
export const  selectMovie = (movie) => {
    return {
        type :Actiontype.SELECT_MOVIE ,
        payload : movie
    }
}
export const removeMovie = (movie)=>{
    return {
        type : "removeMovie",
        payload : movie
    }
}

export const Movie = (movie)=>{
    return {
        type : "playing movie",
        payload:movie
    }
}