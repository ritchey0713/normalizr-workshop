import React from "react";

const Artist = ({ artists, ...otherProps }) => {
  const artist = artists.find(
    (artist) => artist.id === parseInt(otherProps.match.params.id)
  );
  return (
    <div>
      <br />
      {artist ? artist.name : "SHOWPAGE"}
    </div>
  );
};

export default Artist;
