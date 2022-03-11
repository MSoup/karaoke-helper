import React from "react";

import Album from "./Album";

export default function Results(props) {
  const { results } = props;
  console.log(typeof results, results);
  if (Array.isArray(results)) {
    return results.map(album => {
      console.log('album',album);
      return <Album key={album.id} {...album} />;
    });
  } else {
    return null;
  }
}
