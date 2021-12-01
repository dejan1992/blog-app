import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.Background}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="a">
          {props.children}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.paragraf}
        </Typography>
      </CardContent>

    </Card >
  );
}
