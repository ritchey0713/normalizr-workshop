import SongActionTypes from "./song.types";

const INITIAL_STATE = {
  songCollections: {},
};
const songReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SongActionTypes.SET_SONGS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default songReducer;
