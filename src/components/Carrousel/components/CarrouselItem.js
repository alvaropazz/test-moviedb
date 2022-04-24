import React from "react";
import { CarrouselItemWrapper } from "./styles";
import { MOVIE_DB_CONFIG } from "../../../locales";

const CarrouselItem = ({ showModal, movie }) => {
  return (
    <CarrouselItemWrapper>
      <img
        className="item-image"
        src={`${MOVIE_DB_CONFIG.images.base_url}${MOVIE_DB_CONFIG.images.poster_sizes[6]}${movie.poster_path}`}
        alt="movie-poster"
        onClick={() => showModal(movie)}
      />
      <div className="item-text">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </CarrouselItemWrapper>
  );
};

export default CarrouselItem;
