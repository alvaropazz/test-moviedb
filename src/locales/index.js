const API_KEY = "e08815ebb9a68b5816a9e3ae26b751e1";

export const MOVIE_DB_CONFIG = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  },
};

export const popular = {
  title: "Popular",
  subtitle:
    "A 'film goer,' 'movie goer,' or 'film buff' is a person who likes or often attends films and movies, and any of these, though more often the latter, could also see oneself as a student to films and movies or the filmic process. Intense interest in films, film theory, and film criticism, is known as cinephilia. A film enthusiast is known as a cinephile or cineaste.",
  url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export const topRated = {
  title: "Top Rated",
  subtitle:
    "A 'film goer,' 'movie goer,' or 'film buff' is a person who likes or often attends films and movies, and any of these, though more often the latter, could also see oneself as a student to films and movies or the filmic process. Intense interest in films, film theory, and film criticism, is known as cinephilia. A film enthusiast is known as a cinephile or cineaste.",
  url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export const upcoming = {
  title: "Upcoming",
  subtitle:
    "A 'film goer,' 'movie goer,' or 'film buff' is a person who likes or often attends films and movies, and any of these, though more often the latter, could also see oneself as a student to films and movies or the filmic process. Intense interest in films, film theory, and film criticism, is known as cinephilia. A film enthusiast is known as a cinephile or cineaste.",
  url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};
