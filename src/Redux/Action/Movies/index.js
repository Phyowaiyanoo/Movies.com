import { Actiontype } from "../type"


export const fetchMovie = (movies) => {
    
    return {
        type : Actiontype.Fetch_Movie,
        payload : movies
    }
}
export const selectMovie = (movie) => {
    return {
        type : Actiontype.Select_Movie,
        payload : movie
    }
}
export const video = (video) => {
    return {
        type : Actiontype.video,
        payload : video
    }
}
export const removeMovie = (movie) => {
    return {
        type : Actiontype.remove,
        payload : movie
    }
}
