import axios from "axios";
export const api_key="39811d5fa219d9fe38cd2956c20a5f98"

 export const api = axios.create({
    baseURL : "https://api.themoviedb.org/3"
 });
