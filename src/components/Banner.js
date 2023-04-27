import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "./../api/request";

import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  // 영화 정보를 저장
  const [movie, setMovie] = useState([]);

  // 비디오 클릭여부 확인
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 가져오기 (여러영화)
    const request = await axios.get(requests.fetchNowPlaying);
    // 여러 영화중 하나의 영화만 가져오기
    const movieId =
      request.data.results[
        // 가져온 영화 개수에 맞춰서 그중에 하나만 출력 할 수있도록
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {
        append_to_response: "videos",
      },
    });
    setMovie(movieDetail);
  };

  // 글자 너무 길때 자르기
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }

  if(isClicked){
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    )
  }else{
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition:"top center",
          backgroundSize:"cover"
        }}>
        <div style={{fontSIze:10}} className="banner__contents">
          <h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
          <div className="banner__buttons">
            {movie?.videos?.results[0]?.key &&
              <button className="banner__button play" onClick={()=>setIsClicked(true)}>Play</button>
            }
          </div>
          <p className="banner__description">
            {truncate(movie.overview, 100)}
          </p>
          </div>
          <div className="banner__fadeBottom"></div>
      </header>
    );
  }
  
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
