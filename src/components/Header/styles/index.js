import styled from "styled-components";

export const HeaderWrapper = styled.header`
  border: 1px solid red;
  display: flex;
  min-height: 40vh;
  flex-direction: column;
  padding: 2rem;
  justify-content: flex-end;

  .header-title {
    font-size: 7rem;
    margin-bottom: 5rem;
  }

  .header-body {
    font-size: 2rem;
    margin: 1rem 0;
    width: 70%;
  }
`;
