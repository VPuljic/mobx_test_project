export async function moviesService(query) {
  const api = `http://www.omdbapi.com/?s=${query}&page=1&apikey=d1a81ec8`;
  const response = await fetch(api);

  const data = await response.json();
  return data;
}
