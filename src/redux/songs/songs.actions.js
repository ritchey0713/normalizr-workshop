import SongActionTypes from "./song.types";
import { normalize } from "normalizr";
import * as schema from "../schema/rootSchema";

export const setSongs = (songs) => ({
  type: SongActionTypes.SET_SONGS,
  songs,
});

export const startSetSongs = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/songs")
      .then((resp) => resp.json())
      .then((data) => {
        const normalizedData = normalize(data, [schema.songs]);
        console.log("NORMAL", normalizedData);
        dispatch(setSongs(normalizedData));
      });
  };
};
