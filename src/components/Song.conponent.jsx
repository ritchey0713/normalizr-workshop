import React from "react";
import { connect } from "react-redux";

const Song = ({ id, song }) => {
  return <div>Title: {song.title}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    song: state.songs.songCollections[ownProps.id],
  };
};

export default connect(mapStateToProps)(Song);
