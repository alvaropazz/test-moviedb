import React from "react";
import "./styles/index.js";
import {
  CarrouselWrapper,
  carrouselStyle,
  carrouselBreakpoints,
  slideStyle,
} from "./styles";
import CarrouselItem from "./components/CarrouselItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { MOVIE_DB_CONFIG } from "../../locales";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carrousel = ({ title, subtitle, data }) => {
  const movieItems = data?.results;

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

      <Swiper
        centeredSlides={false}
        spaceBetween={1}
        pagination={{
          type: "fraction",
        }}
        breakpoints={carrouselBreakpoints}
        navigation={true}
        modules={[Navigation]}
        style={carrouselStyle}
        className="swiper-container"
      >
        {movieItems?.map((movie) => {
          return (
            <SwiperSlide style={slideStyle} key={movie.title}>
              <CarrouselItem
                title={movie.title}
                release_date={movie.release_date}
                image_source={`${MOVIE_DB_CONFIG.images.base_url}${MOVIE_DB_CONFIG.images.poster_sizes[6]}${movie.poster_path}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CarrouselWrapper>
  );
};

export default Carrousel;
