import React from "react";
import { AddBox } from '@mui/icons-material';
import { Card } from "@mui/material";

export default function Album(props) {
  // const albumInfoClass = classnames("album__info", {
  //   "album__info--explicit": props.collectionExplicitness === "explicit"
  // });
  // const { albumImages, albumName, artistName, isExplicit } = props;
  // const { albumImages, albumName, artistName, isExplicit } = searchResults;
  const albumImage = props.album.images[0].url;
  const albumName = props.album.name;
  const songName = props.name;
  const artistsArr = props.artists;
  const isExplicit = props.explicit;
  const artists = artistsArr
      .map(artist => artist.name)
      .join(', ');

  return (
    <Card className="album" sx={{ bgcolor: '#3d5a80' }}>
      <img className="album-result-img" src={albumImage} alt="Album" />
      <div className="album-info">
        <div className="song-name">{songName}</div>
        <div className="album-name">{albumName}</div>
        <div className="album-artist">{artists}</div>
      </div>
      <div className="add-song">
        <AddBox fontSize="large" />
      </div>
    </Card>
  );
}
