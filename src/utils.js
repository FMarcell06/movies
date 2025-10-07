import axios from "axios";
import { useQueries, useQuery } from "react-query";

const base_url="https://api.themoviedb.org/3/discover/"

export const getData=async ({queryKey})=>{
    const url =base_url+queryKey[1]+"?api_key="+import.meta.env.VITE_TMDB_API_KEY+"&page="+queryKey[2]
    const resp = await axios.get(url)
    return resp.data
}

export const img_300="https://image.tmdb.org/t/p/w300"
export const img_500="https://image.tmdb.org/t/p/w500"