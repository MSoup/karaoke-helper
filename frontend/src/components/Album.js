import React from "react";

export default function Album(props) {
  // const albumInfoClass = classnames("album__info", {
  //   "album__info--explicit": props.collectionExplicitness === "explicit"
  // });
  // const { albumImages, albumName, artistName, isExplicit } = props;
  // const { albumImages, albumName, artistName, isExplicit } = searchResults;
  const albumImages = props.album.images;
  const albumName = props.album.name;
  const artistName = props.album.artists;
  const isExplicit = props.explicit;

  return (
    <article className="album">
      <img className="album__thumbnail" src={albumImages[0]} alt="Album" />
      <div className=''>
        <div className="album__name">{albumName}</div>
        <div className="album__artist">{artistName}</div>
      </div>
    </article>
  );
}
