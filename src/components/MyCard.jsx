import { img_300, img_500 } from '../utils'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export const MyCard = ({backdrop_path,title,overview}) => {
  return (
    <Card sx={{ maxWidth: 345 ,borderRadius:"10%",boxShadow:3, cursor:"pointer"}}>
        <CardMedia
          component="img"
          height="200"
          image={img_500+backdrop_path}
          alt={title}
          sx={{backgroundSize:"cover"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{fontWeight:"bold"}} component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {overview}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}