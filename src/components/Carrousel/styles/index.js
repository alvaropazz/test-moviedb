import styled from "styled-components";

export const CarrouselWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  padding: 2rem;
  justify-content: space-between;
  margin: 2rem 0 0 0;

  .carrousel-header {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;

    .carrousel-header-title {
      display: flex;
      align-items: center;
      margin: 1rem 0 0 0;

      h2 {
        font-size: 2rem;
      }
    }

    p {
      margin: 2rem 0 0 0;
      width: 20%;
    }
  }

  .carrousel-content {
    border: 5px solid black;
    padding: 1rem;
    position: relative;

    .carrousel-content-items {
      border: 1px solid blue;
      min-height: 30rem;
      display: flex;
      padding: 1rem;
    }

    .carrousel-buttons {
      border: 1px solid orange;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      height: 5rem;
      width: 100%;
      position: absolute;
      top: 40%;
      left: 0;
      z-index: 1;
    }
  }
`;
