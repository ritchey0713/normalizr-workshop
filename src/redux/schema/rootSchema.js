// import { Schema, arrayOf } from "normalizr";

// export const post = new Schema("posts");
// export const arrayOfPosts = arrayOf(post);

import { schema } from "normalizr";

export const songs = new schema.Entity("song");

export const artists = new schema.Entity("artists", {
  songs: [songs],
});
