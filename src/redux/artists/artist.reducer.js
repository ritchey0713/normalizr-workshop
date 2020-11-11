import ArtistActionTypes from "./artist.types";

const INITIAL_STATE = {
  artistCollections: {},
};
const artistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtistActionTypes.SET_ARTISTS:
      return {
        ...state,
        artistCollections: action.artists.entities.artists,
      };
    default:
      return state;
  }
};

export default artistReducer;
