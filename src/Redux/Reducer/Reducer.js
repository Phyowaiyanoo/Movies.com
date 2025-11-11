import {combineReducers}from "redux"
import { movieReducer } from "./movies/reducer"

const  reducers = combineReducers(
{ movies : movieReducer
}
)
export default reducers;
