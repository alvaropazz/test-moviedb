import React from "react";
import { CarrouselItemWrapper } from "./styles";

const CarrouselItem = ({ title, date }) => {
  return (
    <CarrouselItemWrapper>
      <h2>{title}</h2>
      <p>{date}</p>
    </CarrouselItemWrapper>
  );
};

export default CarrouselItem;
