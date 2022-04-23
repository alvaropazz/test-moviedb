import "./App.css";
import React, { useState, useEffect } from "react";
import { popular, topRated, upcoming } from "./locales";
import { fetchMovies } from "./utils";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Modal from "./components/Modal";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topMovieBackdrop, setTopMovieBackdrop] = useState([]);

  useEffect(() => {
    fetchMovies(popular.url).then((data) => setPopularMovies(data));
    fetchMovies(topRated.url).then((data) => setTopRatedMovies(data));
    fetchMovies(upcoming.url).then((data) => setUpcomingMovies(data));
    fetchMovies(popular.url).then((data) =>
      setTopMovieBackdrop(data.results[0].backdrop_path)
    );
  }, []);

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="wrapper" data-testid="wrapper">
      <Header backdrop={topMovieBackdrop} />
      <Carrousel
        title={popular.title}
        subtitle={popular.subtitle}
        data={popularMovies}
      />
      <Carrousel
        title={topRated.title}
        subtitle={topRated.subtitle}
        data={topRatedMovies}
      />
      <Carrousel
        title={upcoming.title}
        subtitle={upcoming.subtitle}
        data={upcomingMovies}
      />

      <button
        type="button"
        onClick={() => showModal()}
        style={{ height: "1vh" }}
      ></button>

      <Modal handleClose={hideModal} show={show} />
    </div>
  );
};

export default App;
