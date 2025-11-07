import { Actiontype } from "../../Action/Action-type"

const initialState = {
movies : [],
movie : {},
video : []
}
export const movieReducer = (state = initialState ,{type,payload} ) =>{
    switch(type){
        case Actiontype.FETCH_MOVIES : 
        return {...initialState , movies : payload};
        case Actiontype.SELECT_MOVIE :
            return {...initialState , movie : payload};
        case "playing movie" : 
            return {...initialState ,video : payload}
        default : return state
    }
}