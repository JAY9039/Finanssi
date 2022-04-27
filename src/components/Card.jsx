import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 320, margin:"auto", marginBottom:"15px" }}>
      <video width="100%" height="auto" src={props.src} controls></video>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
    
       <a style={{textDecoration:"none", fontSize:"21px"}}href={props.learnmore}>Learn More </a>

      </CardActions>
    </Card>
  );
}
