import React from 'react'
import { PageLayout } from '../components/PageLayout'
import Grid from '@mui/material/Grid'
import { useState } from 'react';
import { useQuery } from 'react-query';
import { MySpinner } from '../components/MySpinner';
import { MyCard } from '../components/MyCard';
import { getData } from '../utils';

export const TVSeries = () => {
  const [page, setPage] = React.useState(1);
  const [selectedGenres, setSelectedGenres] = useState([])
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tvdata", "tv",page,selectedGenres],
    queryFn: getData,
  });
  
  {
    data && console.log(data);
  }
  return (
    <PageLayout title="Tv Series" page={page} setPage={setPage} type="tv" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>
      {isLoading && <MySpinner />}
      <Grid
        container
        spacing={10}
        justifyContent="center"
   >
        {data && data.results.map((obj) => <MyCard key={obj.id} {...obj} title={obj.name} release_date={obj.first_air_date} />)}
      </Grid>
    </PageLayout>
  )
}
