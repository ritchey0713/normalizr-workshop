import SongActionTypes from "./song.types";

export const setSongs = (songs) => ({
  type: SongActionTypes.SET_SONGS,
  songs,
});

export const startSetSongs = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/songs")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setSongs(data));
      });
  };
};
