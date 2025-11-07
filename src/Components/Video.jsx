/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api, api_key } from '../Api';
import { useParams } from 'react-router';
import { Movie } from '../Redux/Action/Movies';
import "../CSS/Video.css"
const Video = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const video = async()=>{
        const res =await api.get(`/movie/${id}/videos?api_key=${api_key}`)
        dispatch(Movie(res.data.results))
        
    }
    useEffect(()=>{
        if(id){
            video()
        }
        },[])
         let movie = [];
         movie = useSelector((state)=>state.movies.video)
         JSON.stringify(movie)
         
  return (
    <div  >
{

movie.map(video => 
<iframe src={`https://www.youtube.com/embed/${video.key}`} key = {video.id}></iframe>
)}
    
    </div>
  )
}

export default Video
