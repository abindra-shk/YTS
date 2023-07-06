import React from 'react'
import { useNavigate } from "react-router";

export default function MovieCard({movie}) {
    const navigate=useNavigate();

  return (
    <div className="movie-card" onClick={()=>navigate('/movie/'+movie.id)}>
        <div className='card-image'>
          <img src={movie.medium_cover_image}/>
          <div className='card-details'>
                <div>
                    <i class="material-icons">star</i>
                </div>
                <div className='rating'>
                    <h3><b>{movie?.rating}/10</b></h3>
                </div>
                <div className='genre'>
                     {movie.genres?.map((a,key)=><div key={key}><b>{a}</b></div>)} 
                </div>
          </div>  
        </div>
        <h4>{movie.title}<br/>{movie.year}</h4>
     
    </div>
  )
}
