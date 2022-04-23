import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  padding: 5rem;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  margin-bottom: 6rem;

  .header-title {
    font-size: 7rem;
    color: white;
  }

  .header-body {
    font-size: 2rem;
    margin-top: 2rem;
    width: 70%;
    color: white;
  }
`;
