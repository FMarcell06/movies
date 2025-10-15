import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FaYoutube } from "react-icons/fa";
import { getDetailsData, img_300, noImg } from '../utils';
import { useQuery } from 'react-query';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const ShowTrailer = ({id,type}) => {
    const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    const ytUrl="https://youtube.com/watch?v="
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["details", urlVideos],
    queryFn: getDetailsData,
  });

  return (
    <Button
      variant="contained"
      startIcon={<FaYoutube />}
      href={data&&data?.results&&data.results.length>0 ? ytUrl + data.results[0].key : noImg}
      target='_blank'
      className='trailerBtn'
    >
    Watch the trailer
    </Button>
  );
}