import React, { useState } from 'react'
import "../CSS/Search.css"
import { api, api_key } from "../Api/index.js"
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../Redux/Action/Movies/index.js'
const Search = () => {
    const dispatch = useDispatch();
    const [movie, setmovie] = useState('');
    const searchMovie = async () => {
        if (movie !== '') {
            const res = await api.get(`/search/movie?query=${movie}&api_key=${api_key}`);
            dispatch(fetchMovies(res.data.results));
        } else {
            const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
            dispatch(fetchMovies(res.data.results));
        }
    }
    return (
        <div>
            <div className='Search'>
                <input type="text" placeholder='Search' value={movie} onChange={(e) => setmovie(e.target.value)} />
                <button type="button" className='button' onClick={() => searchMovie()}>Search</button></div>
        </div>
    )
}

export default Search
