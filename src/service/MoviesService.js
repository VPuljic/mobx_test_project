const webApiUrl = "http://www.omdbapi.com/?s=action&page=1&apikey=d1a81ec8";

class MoviesService {
  getMovies = () => {
    return fetch(webApiUrl).then((response) => response.json());
  };
}
export default MoviesService;
