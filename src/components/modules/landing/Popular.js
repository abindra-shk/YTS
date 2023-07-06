import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router";
import MovieCard from '../../common/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../store/movie/actions';

export default function Popular() {
    const movies = useSelector(state=>state.movieReducer.movies)
    const [loading,setLoading] = useState(false);
    const navigate=useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        loadMovies();
    },[]);

    const loadMovies=()=>{
        setLoading(true);
        try{
            dispatch(getMovies())
        }catch(e){
            console.log(e);
        }
        setLoading(false);
    }
  return (
    <div className="yts">
        <div className="description">
            <h1>Download YTS YIFY movies: HD smallest size</h1>
            <p style={{marginBottom:'10px'}}>
                Welcome to the official <b>YTS.MX</b> website. Here you can browse and download YIFY movies in excellent <br/> 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
            <br/>
            
            </p>
        </div>
        <div className="movies-area">
           <div>
                <h2>Popular Downloads</h2>
           </div>
           <div className="movies-list">
           {
           loading? <div>Loading</div>:
           movies.map((v,key)=> <MovieCard movie={v} key={key}/>)}
           </div>
        </div>
    </div>
  )
}
