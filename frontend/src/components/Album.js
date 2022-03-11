import React from "react";

export default function Album(props) {
  // const albumInfoClass = classnames("album__info", {
  //   "album__info--explicit": props.collectionExplicitness === "explicit"
  // });
  // const { albumImages, albumName, artistName, isExplicit } = props;
  // const { albumImages, albumName, artistName, isExplicit } = searchResults;
  const albumImages = props.album.images[0].url;
  const albumName = props.album.name;
  const songName = props.name;
  const artistsArr = props.artists;
  const isExplicit = props.explicit;
  const artists = artistsArr
      .map(artist => artist.name)
      .join(', ');

  return (
    <article className="album">
      <img className="album-result-img" src={albumImages} alt="Album" />
      <div>
        <div className="song-name">{songName}</div>
        <div className="album-name">{albumName}</div>
        <div className="album-artist">{artists}</div>
      </div>
    </article>
  );
}
