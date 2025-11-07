/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api, api_key } from '../Api'
import { useParams , NavLink } from 'react-router'
import { removeMovie, selectMovie } from '../Redux/Action/Movies'
import "../CSS/Details.css"
const Details = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const getDetails = async () => {
    const res = await api.get(`/movie/${id}?api_key=${api_key}`)
    dispatch(selectMovie(res.data))
  }
  useEffect(
    () => {
      if (id) {
        getDetails()
      }
      return () => dispatch(removeMovie({}))
    }, []
  )

  let movie = {};
  movie = useSelector((state) => state.movies.movie)
  return (
    <div className='details_one'>
      {
         JSON.stringify(movie) == {} ?
          <div className='spinner'>

          </div> 
          :

          <div className='details_two'>

             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='detailsImg' />
            
            <div>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <h1> <i className="fa-solid fa-money-check-dollar"></i> Budget {movie.budget}</h1>
              <h1> <i className="fa-regular fa-thumbs-up"></i> Popularity {movie.popularity}</h1>
              <h1> <i className="fa-solid fa-calendar"></i> Relase Date {movie.release_date}</h1>
              <h1> <i className="fa-solid fa-star"></i> {movie.vote_average}</h1>
                 <NavLink to ={`/Video/${movie.id}`}>
                <button type='button'>Watch</button>
              </NavLink>
              <h1> {movie.tagline}</h1>
            </div>
          </div>
      }
    </div>
  )
}

export default Details
