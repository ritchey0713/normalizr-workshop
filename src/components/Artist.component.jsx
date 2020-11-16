import React from "react";
import Song from "./Song.conponent";

const Artist = ({ artists, ...otherProps }) => {
  const artist = artists.find(
    (artist) => artist.id === parseInt(otherProps.match.params.id)
  );
  console.log(artist.songs);
  return (
    <div>
      <br />
      {artist ? (
        <div>
          Artist Name: {artist.name}
          <ul>
            {artist.songs.map((song) => (
              <li>
                <Song song={song} />
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
