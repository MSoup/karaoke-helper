import React from "react";

import Album from "./Album";

export default function Results(props) {
  const { results, type } = props;
  
  if (Array.isArray(results)) {
    return results.map(album => {
      return <Album key={album.id} type={type} {...album} />;
    });
  } else {
    return null;
  }
}
