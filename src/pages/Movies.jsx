import React from 'react'
import { PageLayout } from '../components/PageLayout'
import Grid from '@mui/material/Grid'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'
import { MySpinner } from '../components/MySpinner'


export const Movies = () => {
    const {data,isLoading,isError}=useQuery({queryKey:["moviesdata","movie"],queryFn:getData})
    
    {data&&console.log(data);
    }
  return (
    <PageLayout title="Movies">
        {isLoading&&<MySpinner/>}
        <Grid container spacing={10} justifyContent="center">
            {data&&data.results.map(obj=>
                <MyCard key={obj.id} {...obj} />
            )}
        </Grid>
    </PageLayout>
  )
}