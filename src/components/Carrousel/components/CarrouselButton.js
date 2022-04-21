import React from "react";
import { CarrouselButtonWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CarrouselButton = ({ direction, onClick }) => {
  return (
    <CarrouselButtonWrapper onClick={onClick}>
      <FontAwesomeIcon
        icon={direction === "right" ? faArrowRight : faArrowLeft}
        style={{ fontSize: "1.5rem" }}
      />
    </CarrouselButtonWrapper>
  );
};

export default CarrouselButton;
