import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { startSetArtists } from "./redux/artists/artist.actions";
import ArtistForm from "./components/ArtistForm.component";
import ArtistContainer from "./containers/ArtistContainer.container";
import { startSetSongs } from "./redux/songs/songs.actions";
class App extends Component {
  componentDidMount() {
    this.props.startSetArtists();
    this.props.startSetSongs();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/artists/new" component={ArtistForm} />
          <Route path="/artists" component={ArtistContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { startSetArtists, startSetSongs })(App);

{
  /* <Route path="/artists" component={ArtistContainer} /> */
}
