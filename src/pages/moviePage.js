import * as React from "react";
import { observer, inject } from "mobx-react";

class MoviePage extends React.Component {
  componentDidMount() {
    this.props.moviesStore.getMovies();
  }

  render() {
    return (
      <div>
        <input type="search" placeholder="Search" />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>imdbID</th>
            </tr>
          </thead>
          <tbody>
            {this.props.moviesStore.moviesList.model.map((movie) => (
              <tr key={movie.imbdID}>
                <td>{movie.Title}</td>
                <td>{movie.imbdID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default inject("moviesStore")(observer(moviesList));
