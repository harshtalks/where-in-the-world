import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  grid-row-gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-column-gap: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
