import React from 'react'
import { useQuery } from 'react-query'
import { getGenres, getGenresList } from '../utils'

export const GetGenres = ({genre_ids}) => {
    const {data,isError,isLoading}=useQuery({queryFn:getGenresList})
    data&&console.log(data.genres[0].id);
    console.log(genre_ids);
    
  return (
    <div>{data&&data.genres.map(obj=>
        console.log(obj.id)
        
    )}</div>
  )
}