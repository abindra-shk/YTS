import { GetRequest } from "../plugins/http"

export const APILoadMovies=()=>{
    return GetRequest('list_movies.json',  {params:{page:1, sort_by:"like_count", order_by:"DESC", limit: 8, with_rt_ratings:true}})
}