import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import imdb from "../../../assets/imdb.png"
import spilled from "../../../assets/spilled.png"
import MovieCard from "../../common/MovieCard";
import {Dialog} from "../../common/dialog";
import playbutton from "../../../assets/playbutton.png"


export default function Details() {
    const [movie, setMovie] = useState({torrents:[]});
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const trailerurl = `https://www.youtube.com/embed/${movie.yt_trailer_code}`;

    useEffect(()=>{
        loadMovie();
    },[id]);

    const loadMovie=async ()=>{
        setLoading(true);
        const res =await axios.get('https://yts.mx/api/v2/movie_details.json',{params:{movie_id :id ?? '', with_cast: true, with_images: true}});
        const res2 =await axios.get('https://yts.mx/api/v2/movie_suggestions.json',{params:{movie_id :id ?? ''}});
        setMovie(res.data.data?.movie);
        setMovies(res2.data.data?.movies);

        setLoading(false);
    }    

    return<>
            <div className="background-image" style={{ backgroundImage: `url(${movie?.background_image})`}}>
                <div id="background-overlay"></div> 
            </div> 
            <div className="detail-content">
                <div className="detail-area">
                {
                loading? <div>Loading...</div>:
                <>
                <div className="details">
                    <div className="image">
                        <img src={movie?.medium_cover_image}/>
                        <a className="button" href={movie.torrents[0]?.url}><span class="material-symbols-outlined">download</span>Download</a>
                        <a className="button" style={{background: "#00FFE7A3"}}href="">Watch Now</a>
                    </div>    
                    <div className="title">
                        <div className="first-part">
                            <h1>{movie?.title_long}</h1>
                            <h2>{movie?.year}</h2>
                            <h2>{movie.genres?.map((a,key)=><div key={key} style={{display:'flex'}}> {a} {key !== movie.genres.length -1 && <div>/</div>}  </div>)} </h2>
                        </div>    
                        <div className="middle-part">
                            <div className="available">
                                <h3>Available in: </h3> {movie.torrents?.map((jen,key)=><div className="button" key={key}><a href={jen.url} target="_blank">{jen.quality}.{jen.type}</a></div>)}
                            </div>
                            <br/>
                            <br/>
                            <a className="button" style={{width: "60%"}} href=""><span class="material-symbols-outlined">download</span>Download Subtitles</a>
                        </div>   
                        <div className="bottom-part">
                        <div class="rating-row">
                            <span class="material-symbols-outlined">favorite</span>
                            <span id="movie-likes">{movie?.like_count}</span>
                        </div>
                        <div class="rating-row">
                            <span className="icon"><img src={spilled} alt="" /></span>
                            <span id="movie-likes">{movie?.like_count}</span>
                        </div>
                        <div class="rating-row">
                            <span className="icon"><img src={imdb} alt="" /></span>
                            <span id="movie-likes">{movie?.rating}/10</span>
                        </div>
                        </div>     
                        {/* <br/><b>WEB</b>: same quality as BluRay</span> */}
                    </div>    
                    <div className="similar">
                        <p>Similar Movies</p>
                        <div className="movies-list">
                            {
                            loading? <div>Loading</div>:
                            movies?.map((v,key)=> <div className="movie-card" key={key} onClick={()=>navigate('/movie/'+v?.id ?? '')}>
                                <div className="card-image">
                                <img src={v?.medium_cover_image ?? ''}/>
                                </div>   
                            </div>)}
                        </div>
                    </div>  
                          
                        
                        {/* <p>{movie?.description_full}</p> */}

                        {/* <div>
                            {movie.torrents?.map((jen,key)=><div key={key}><a href={jen.url} target="_blank">{jen.quality}</a></div>)} 
                        </div>
                        <div>
                            {movie.cast?.map((a,key)=><div key={key}><a href={a.name} target="_blank">{a.name}</a></div>)} 
                        </div> */}
                </div>
                <div className="screenshots" >
                    <div className="screenshot" onClick={()=>setIsVisible(true)} >
                        <img src={movie?.large_screenshot_image1}/>
                        <div className="trailer-button">
                            <img src={playbutton}/>
                            <div className="trailer-text">
                                Trailer
                            </div>
                        </div>
                    </div>
                    <div className="screenshot"><img src={movie?.large_screenshot_image2}/></div>
                    <div className="screenshot"><img src={movie?.large_screenshot_image3}/></div>
                </div>
                <div className="movie-info">
                    <div className="summary">
                        <h3>Plot Summary</h3>
                        <p>{movie?.description_full}</p>
                        <p><br/>
                            <em>Uploaded by: <a href="https://yts.mx/user/freeman">FREEMAN</a> </em><br/>
                            <em>{movie?.date_uploaded}</em>
                        </p>
                    </div>
                    <div className="crew">
                        <div class="directors">
                            <h3>Cast</h3>
                            <div class="list-cast">
                                {/* <div class="tableCell">
                                    <a class="avatar-thumb" href="https://www.imdb.com/name/nm0821432/" target="_blank" title="Chad Stahelski IMDb Profile"> <img src="https://img.yts.mx/assets/images/actors/thumb/nm0821432.jpg" alt="Chad Stahelski Photo"/> </a>
                                </div>
                                <div class="list-cast-info tableCell">
                                    <a class="name-cast" href="https://yts.mx/browse-movies/Chad%20Stahelski"><span itemprop="director" itemscope="" itemtype="http://schema.org/Person"><span itemprop="name">Chad Stahelski</span></span></a>
                                </div> */}
                                <div className="cast">
                                    {movie.cast?.map((a,key)=><>
                                        {/* <div key={key}><a href={a.name} target="_blank">{a.name}</a></div> */}
                                        <div className="cast-member">
                                            <div key={key} className="image"><a href={'https://www.imdb.com/name/nm'+ x.imdb_code } target="_blank"><img src={x.url_small_image}/></a></div>
                                            <div key={key} className="name">{x.name}&nbsp;</div>
                                            <div className="character">as {x.character_name}</div>
                                        </div>
                                    </>)} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                }
                </div>
                {/* <h1>Movie Suggestions</h1> */}
                {/* <div className="movies-area">
                {
                loading? <div>Loading</div>:
                movies?.map((v,key)=> <div className="movie-card" key={key} onClick={()=>navigate('/movie/'+v?.id ?? '')}>
                        <img src={v?.medium_cover_image ?? ''}/>
                        <h2>{v?.title_long ?? ''}</h2>
                </div>)}
                </div> */}

            </div> 
            <Dialog open={isVisible} close={()=>setIsVisible(false)}>
                <iframe src={trailerurl}></iframe>
            </Dialog>  

    </>
}

