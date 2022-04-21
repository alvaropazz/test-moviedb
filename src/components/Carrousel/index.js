import React from "react";
import CarrouselItem from "./components/CarrouselItem";
import CarrouselButton from "./components/CarrouselButton";
import { CarrouselWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carrousel = ({ title, subtitle }) => {
  const direction = () => console.log("direction");

  return (
    <CarrouselWrapper>
      <div className="carrousel-header">
        <div className="carrousel-header-title">
          <h2>{title}</h2>
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          />
        </div>
        <p>{subtitle}</p>
      </div>

      <div className="carrousel-content">
        <div className="carrousel-content-items">
          <CarrouselItem title={"Movie title"} date={"01 01 2000"} />
          <CarrouselItem title={"Movie title"} date={"01 01 2000"} />
          <CarrouselItem title={"Movie title"} date={"01 01 2000"} />
          <CarrouselItem title={"Movie title"} date={"01 01 2000"} />
          <CarrouselItem title={"Movie title"} date={"01 01 2000"} />
          <CarrouselItem title={"Movie title"} date={"01 01 2000"} />
        </div>
        <div className="carrousel-buttons">
          <CarrouselButton direction="left" onClick={direction} />
          <CarrouselButton direction="right" onClick={direction} />
        </div>
      </div>
    </CarrouselWrapper>
  );
};

export default Carrousel;
