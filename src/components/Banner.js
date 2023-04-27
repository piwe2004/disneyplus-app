import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from './../api/request';


const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    return () => {
      fetchData();
    }
  }, [])
  
  const fetchData = async() => {
    // 현재 상영중인 영화 가져오기
    const request = await axios.get(requests.fetchNowPlaying);
    request
  }

  return (
    <div>
      
    </div>
  )
}

export default Banner
