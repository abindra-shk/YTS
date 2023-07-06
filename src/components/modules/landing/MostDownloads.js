import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios";
import MovieCard from '../../common/MovieCard';
export default function MostDownloads() {
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        loadMovies();
    },[]);

    const loadMovies=()=>{
        setLoading(true);
        axios.get('https://yts.mx/api/v2/list_movies.json',{params:{page:1, sort_by:"download_count", order_by:"DESC", limit: 8, with_rt_ratings:true}}).then(res=>{
            setMovies(res.data.data.movies);
        });
        setLoading(false);
    }
  return (
    <div className="yts">
        <div className="description">
            {/* <h1>Most Downloads</h1> */}
            {/* <p style={{marginBottom:'10px'}}>
                Welcome to the official <b>YTS.MX</b> website. Here you can browse and download YIFY movies in excellent <br/> 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
            <br/>
            
            </p> */}
        </div>
        <div className="movies-area">
           <div>
                <h2>Most Downloads</h2>
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
