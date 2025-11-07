
import { createStore } from "redux";
import reducers from "../Reducer/Reducer";

 export const store = createStore(
    reducers, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
//https://api.themoviedb.org/3/movie/now_playing?api_key=39811d5fa219d9fe38cd2956c20a5f98