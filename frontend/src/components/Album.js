import React from "react";

export default function Album(props) {
  // const albumInfoClass = classnames("album__info", {
  //   "album__info--explicit": props.collectionExplicitness === "explicit"
  // });
  // const { albumImages, albumName, artistName, isExplicit } = props;
  // const { albumImages, albumName, artistName, isExplicit } = searchResults;
  const albumImages = props.album.images[0].url;
  const albumName = props.album.name;
  const artistName = props.album.artists[0].name;
  const isExplicit = props.explicit;

  return (
    <article className="album">
      <img className="album-result-img" src={albumImages} alt="Album" />
      <div>
        <div className="album-name">{albumName}</div>
        <div className="album-artist">{artistName}</div>
      </div>
    </article>
  );
}
