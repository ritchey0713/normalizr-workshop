import ArtistActionTypes from "./artist.types";
import { normalize } from "normalizr";
import * as schema from "../schema/rootSchema";

export const setArtists = (artists) => {
  return {
    type: ArtistActionTypes.SET_ARTISTS,
    artists,
  };
};

export const startSetArtists = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/artists")
      .then((resp) => resp.json())
      .then((data) => {
        const normalizedData = normalize(data, [schema.artists]);
        dispatch(setArtists(normalizedData));
      });
  };
};

export const addArtist = (artist) => ({
  type: ArtistActionTypes.ADD_ARTIST,
  artist,
});

export const startAddArtist = () => {};
