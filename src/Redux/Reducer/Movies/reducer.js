import { Actiontype } from "../../Action/type";



const initialState = {
    movies : [],
    movie : {},
    video : []
}
export  const movieReducer = (state = initialState , {type , payload}) => {
    switch(type){
        case Actiontype.Fetch_Movie: return {
            ...initialState , movies : payload
        };
        case Actiontype.Select_Movie: return{
            ...initialState , movie : payload
        } ; 
        case Actiontype.video: return{
            ...initialState , video: payload
        };
        default : return state
    }
};
