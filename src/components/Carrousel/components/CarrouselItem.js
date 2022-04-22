import React from "react";
import { CarrouselItemWrapper } from "./styles";

const CarrouselItem = ({ title, date }) => {
  return (
    <CarrouselItemWrapper>
      <img className="item-image" src={""} alt="movie-poster" />
      <div className="item-text">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </CarrouselItemWrapper>
  );
};

export default CarrouselItem;
