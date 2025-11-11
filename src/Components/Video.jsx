/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { api, api_key } from '../Api/Axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { video } from '../Redux/Action/Movies'
import "../CSS/Video.css"
const Video = () => {
    const dispatch = useDispatch()
    const  {id} = useParams()
    const getVideo = async ()=>{
        
        const res = await api.get(`/movie/${id}/videos?api_key=${api_key}`)
        dispatch(video(res.data.results))
    }
    useEffect(()=>{
        getVideo()
    },[])
    
 let Videos = useSelector((state)=>state.movies.video)
JSON.stringify(Videos)
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${Videos.key} key = ${Videos.id}`}
      ></iframe>
    </div>
  )
}

export default Video
