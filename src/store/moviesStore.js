import { makeAutoObservable } from "mobx";
import { moviesService } from "../services/moviesService";

class Store {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }
  async fetchMovies() {
    const data = await moviesService();
    this.setMoviesList(data);
  }

  setMoviesList(data) {
    this.data = data;
  }
}

export default new Store();
