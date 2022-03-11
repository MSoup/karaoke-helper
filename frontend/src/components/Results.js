import React from "react";

import Album from "./Album";

export default function Results(props) {
  const { results } = props;

  return results.map(album => {
    return <Album key={album.collectionId} {...album} />;
  });
}
