/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { api, api_key } from '../Api/Axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeMovie, selectMovie } from '../Redux/Action/Movies'
import { NavLink, useParams } from 'react-router-dom'
import "../CSS/Details.css"
const Details = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const detailsMovie =async ()=>{
 

    const res = await api.get(`/movie/${id}?api_key=${api_key}`)
    dispatch(selectMovie(res.data))
    
  }
  useEffect(()=>{
    if(id){
      detailsMovie()
    }
    return ()=>{
      dispatch(removeMovie({}))
    }
  },[])
let movie =useSelector((state)=>state.movies.movie);


  return (
    <div>
      {
        <div className='details' key={movie.id}>

         <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="images" />
         <div>
          <h1>{movie.title}</h1>
          <h2>{movie.overview} </h2>
          <h2> <i className="fa-solid fa-calendar-days"></i> {movie.release_date}</h2>
          <h2> <i className="fa-solid fa-star-of-life"></i> {movie.vote_average} </h2>
          <h2>{movie.tagline} </h2>
         <NavLink to = {`/Video/${movie.id}`}>
           <button type='button'> Watch</button>
         </NavLink>
         </div>

        </div>
      }
    </div>
  )
}

export default Details
