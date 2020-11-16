import React from "react";

import { Link } from "react-router-dom";

const ArtistCollections = ({ artists, match }) => {
  return (
    <div>
      {Object.values(artists).map((artist) => (
        <div key={artist.id}>
          <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ArtistCollections;
