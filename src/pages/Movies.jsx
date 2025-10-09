import React from "react";
import { PageLayout } from "../components/PageLayout";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import { getData } from "../utils";
import { MyCard } from "../components/MyCard";
import { MySpinner } from "../components/MySpinner";
import { useState } from "react";

export const Movies = () => {
  const [page, setPage] = React.useState(1);
  const [selectedGenres, setSelectedGenres] = useState([])
  const { data, isLoading, isError } = useQuery({
    queryKey: ["moviesdata", "movie",page,selectedGenres],
    queryFn: getData,
  });
  
  {
    data && console.log(data);
    
  }
  return (
    <PageLayout title="Movies" page={page} setPage={setPage} type="movie" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} data={data}>
      {isLoading && <MySpinner />}
      <Grid
        container
        spacing={10}
        justifyContent="center"
   >
        {data && data.results.map((obj) => <MyCard key={obj.id} {...obj} />)}
      </Grid>
    </PageLayout>
  );
};
