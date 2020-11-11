import React from "react";

const Artist = ({ artists, ...otherProps }) => {
  const artist = artists[otherProps.match.params.id];
  return (
    <div>
      <br />
      {artist ? artist.name : "SHOWPAGE"}
    </div>
  );
};

export default Artist;
