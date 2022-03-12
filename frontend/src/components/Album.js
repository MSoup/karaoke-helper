import React from "react";
import { AddBox } from '@mui/icons-material';
import { Card } from "@mui/material";

export default function Album(props) {
  const {type} = props;

  const album = 
    (type === 'artist') ? <>
      <img className="album-result-img" src={props.images[0].url} alt="Artist" />
      <div className="album-info">
        <div className="title">{props.name}</div>
        <div className="subtitle">{props.genres.join(', ')}</div>
      </div>
      </>
    : (type === 'track') ? <>
      <img className="album-result-img" src={props.album.images[0].url} alt="Artist" />
      <div className="album-info">
        <div className="title">{props.name}</div>
        <div className="subtitle">{props.album.name}</div>
        <div className="title">{props.artists.map(artist => artist.name).join(', ')}</div>
      </div>
      </>
    : (type === 'album') ? <>
      <img className="album-result-img" src={props.images[0].url} alt="Artist" />
      <div className="album-info">
        <div className="title">{props.name}</div>
        <div className="subtitle">{props.artists.map(artist => artist.name).join(', ')}</div>
      </div>
      </>
    : <p>Nothing found.</p>

  return (
    <Card className="album" sx={{ bgcolor: '#3d5a80' }}>
      {album}
      <div className="add-song">
        <AddBox fontSize="large" />
      </div>
    </Card>
  );
}
