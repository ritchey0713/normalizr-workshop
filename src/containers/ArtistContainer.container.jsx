import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Artist from "../components/Artist.component";
import ArtistCollection from "../components/ArtistCollection.component";
class ArtistContainer extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path={`${this.props.match.path}`}
          render={(props) => (
            <ArtistCollection {...props} artists={this.props.artists} />
          )}
        />
        <Route
          path={`${this.props.match.path}/:id`}
          render={(props) => <Artist {...props} artists={this.props.artists} />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    artists: state.artists.artistCollections,
    songs: state.songs.songCollections,
  };
};

export default connect(mapStateToProps)(ArtistContainer);
