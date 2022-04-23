import React from "react";
import { CarrouselItemWrapper } from "./styles";

const CarrouselItem = ({ title, release_date, image_source }) => {
  return (
    <CarrouselItemWrapper>
      <img className="item-image" src={image_source} alt="movie-poster" />
      <div className="item-text">
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </CarrouselItemWrapper>
  );
};

export default CarrouselItem;
