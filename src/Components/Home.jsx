/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import "../CSS/Home.css"
import { api, api_key } from '../Api'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../Redux/Action/Movies'
import { Link} from 'react-router'
import Search from './Search'

const Home = () => {
  const dispatch = useDispatch()
  const getMovies = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`)
    dispatch(fetchMovies(res.data.results))
  }
  useEffect(() => {
    getMovies()
  }, [])

  let movies = [];
  movies = useSelector((state) => state.movies.movies)

  return (
    <>
      <Search />

      <div className='photo'>


        {
          movies.length > 0 ? movies.map(movie => (

            <div key={movie.id} className='div_2'>
              <Link to = {`/Details/${movie.id}`} style={{color:"aliceblue" , textDecoration:"none"}}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="movies" />

              <h1>{movie.title}</h1>

              <p>{movie.overview.slice(0, 90)}</p>

              <i className="fa-solid fa-star"></i> {movie.vote_average}
              </Link>
           
            </div>
          )) : <div className='loading'></div>

        }


      </div>
    </>
  )
}


export default Home
