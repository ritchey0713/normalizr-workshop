import SongActionTypes from "./song.types";

export const setSongs = (songs) => ({
  type: SongActionTypes.SET_SONGS,
  songs,
});
