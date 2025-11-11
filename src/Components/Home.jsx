/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api, api_key } from '../Api/Axios';
import { fetchMovie } from '../Redux/Action/Movies';
import "../CSS/Home.css"
import { Link } from 'react-router-dom';
import Search from './Search';
const Home = () => {
    const dispatch = useDispatch();
    const getMovie = async ()=>{
        const res = await api.get(`/movie/popular?api_key=${api_key}`)
         dispatch(fetchMovie(res.data.results));
           }
    useEffect(()=>{
       getMovie()
    },[]);
    let movie = {};
    movie = useSelector((state)=>state.movies.movies)
    
  return (
    <>
    <Search/>
    <div className='fetching'>

      { movie.length > 0 ? movie.map((movie)=>

          <div className='photo' key={movie.id}>
           <Link to = {`/Details/${movie.id}`} className='link'>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt='images'/>
            <h1>{movie.title}</h1>
            <p>{movie.overview.slice(0,100)}</p>
            <h2> <i className="fa-solid fa-calendar-days"></i> {movie.release_date}</h2>
            <h2> <i className="fa-solid fa-star-of-life"></i> {movie.vote_average}</h2>
           </Link>
          </div>)   
        : <div className='loading'></div>
       }
    </div>
    </>
  )
}

export default Home
