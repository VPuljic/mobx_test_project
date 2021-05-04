const api = "http://www.omdbapi.com/?s=action&page=1&apikey=d1a81ec8";

class MoviesService {
  getMovies = async () => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  };
}
export default MoviesService;
