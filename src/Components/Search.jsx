/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { api, api_key } from '../Api/Axios'
import { useDispatch } from 'react-redux'
import { fetchMovie } from '../Redux/Action/Movies'


const Search = () => {
    
    
    const [movie, setMovie] = useState('')
    
    const dispatch = useDispatch()
    const searchMovie = async () => {
        if (movie !== '') {
            const res = await api.get(`/search/movie?query=${movie}&api_key=${api_key}`)
            dispatch(fetchMovie(res.data.results))
        
            
        } else {
            const res = await api.get(`/movie/popular?api_key=${api_key}`)
                    dispatch(fetchMovie(res.data.results));
        }
     

    }
    useEffect(() => {
        searchMovie()
    }, [])
    return (
        <div>
            <input type="text" value={movie} placeholder='Search' onChange={(e) => setMovie(e.target.value)} style={{height:"50px",borderRadius:"9px",marginLeft:"15px",paddingLeft:"8px"}}/>
            <button type='button' onClick={() => searchMovie()}> Search</button>
        </div>
    )
}

export default Search
