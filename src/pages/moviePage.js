import React, { Component } from "react";
import Movie from "../components/Movie";
import { observer } from "mobx-react";

@observer
class MoviePage extends Component {
  constructor(props) {
    console.log("data container props", props);
    super(props);
  }

  renderingLogic() {
    return this.props.movieData.showFlag && this.props.movieData.Title ? (
      <Movie
        Title={this.props.movieData.Title}
        Year={this.props.movieData.Year}
        imdbID={this.props.movieData.imdbID}
      />
    ) : (
      <button onClick={this.props.showMovieDataAction}>
        Click Button To Fire Sync Action State
      </button>
    );
  }

  render() {
    const movieData = this.renderingLogic();
    return <div>{movieData}</div>;
  }
}

export default MoviePage;
