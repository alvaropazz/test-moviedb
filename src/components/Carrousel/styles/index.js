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
    border: 1px solid blue;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0 0;
  }
`;
