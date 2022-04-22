import styled from "styled-components";

export const CarrouselItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 0 0;
  flex 1;
  max-height: 40vh;

  .item-image {
    height: 0;
    object-fit: contain;
    flex: 1;
  }

  .item-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;

    p {
      margin-top: 0.5rem;
    }
  }
`;
