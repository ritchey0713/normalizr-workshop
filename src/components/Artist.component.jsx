import React from "react";
import Song from "./Song.conponent";

const Artist = ({ artists, ...otherProps }) => {
  // const artist = artists.find(
  //   (artist) => artist.id === parseInt(otherProps.match.params.id)
  // );
  const artist = artists[otherProps.match.params.id];
  return (
    <div>
      <br />
      {artist ? (
        <div>
          Artist Name: {artist.name}
          <ul>
            {artist.songs.map((songId) => (
              <li>
                <Song id={songId} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "SHOWPAGE"
      )}
    </div>
  );
};

export default Artist;

// artist.songs.map((songId) => <Song song={songs[songId]} />)
