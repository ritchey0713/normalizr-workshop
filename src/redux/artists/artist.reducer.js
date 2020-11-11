import ArtistActionTypes from "./artist.types";

const INITIAL_STATE = {
  artistCollections: {},
};
const artistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtistActionTypes.SET_ARTISTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default artistReducer;
