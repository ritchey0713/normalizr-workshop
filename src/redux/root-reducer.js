import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import artistReducer from "./artists/artist.reducer";
import songReducer from "./songs/song.reducer";

const persistConfig = {
  key: "root-store",
  storage,
  whitelist: ["artists", "songs"],
};

const rootReducer = combineReducers({
  artist: artistReducer,
  song: songReducer,
});

export default persistReducer(persistConfig, rootReducer);
