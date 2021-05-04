import { observable, action, runInAction, decorate } from "mobx";
import { MoviesService } from "../services/MoviesService";

class moviesStore {
  moviesList = {};

  constructor() {
    this.moviesService = new MoviesService();
  }
  setMoviesList = (apiData) => {
    this.moviesList = apiData;
  };

  getMovies = () => {
    this.moviesService.getMovies().then((data) => {
      runInAction(() => {
        this.setMoviesList(data);
      });
    });
  };

  getMoviesAsync = async () => {
    const data = await this.moviesService.getMovies();

    runInAction(() => {
      this.moviesList = data;
    });
  };
}

decorate(moviesStore, {
  moviesList: observable,
  setMoviesList: action,
});

export default new moviesStore();
