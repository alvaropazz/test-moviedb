import styled from "styled-components";

export const HeaderWrapper = styled.header`
  border: 1px solid red;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  padding: 2rem;
  justify-content: flex-end;

  .header-title {
    font-size: 7rem;
  }

  .header-body {
    font-size: 2rem;
    margin-top: 2rem;
    width: 70%;
  }
`;
