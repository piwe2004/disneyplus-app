import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'

const DetailPage = () => {
  let {movieId} = useParams();
  const [movie, setMovie] = useState({})
  
  useEffect(() => {
      async function fetchDate(){
        const response = await axios.get(
          `/movie/${movieId}`
        )
        setMovie(response.data);
      }
      fetchDate();
  }, [movieId])
  
  if(!movie) return null;

  return (
    <section>
      <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt=""
      />
    </section>
  )
}

export default DetailPage
