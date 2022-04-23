import styled from "styled-components";

export const CarrouselWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;

  .carrousel-header {
    padding: 0 5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    max-width: 70%;

    .carrousel-header-title {
      display: flex;
      align-items: center;

      h2 {
        font-size: 2rem;
      }
    }

    p {
      margin-top: 2rem;
      font-size: 1.5rem;
      word-spacing: 0.05rem;
      letter-spacing: 0.05rem;
      line-height: 1.25;
    }
  }
  .swiper-container div[class^="swiper-button"] {
    background-color: #5031a9;
    padding: 2rem;
    border-radius: 3rem;
    width: 6rem;
    height: auto;
    top: 45%;
  }

  .swiper-container div[class^="swiper-button"]:after {
    font-size: 2rem;
    color: white;
    font-weight: bold;
  }
`;

export const carrouselStyle = {
  display: "flex",
  padding: "0 5rem",
  marginTop: "4rem",
};

export const slideStyle = {
  minHeight: "45vh",
};

export const carrouselBreakpoints = {
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },

  992: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 5,
  },
  1400: {
    slidesPerView: 6,
  },
};
