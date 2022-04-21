const API_KEY = "e08815ebb9a68b5816a9e3ae26b751e1";

const topMoviesUrl = (page) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

export const fetchTopMovies = async (page) => {
  const response = await fetch(topMoviesUrl(page));
  const data = await response.json();
  console.log(data);
};
