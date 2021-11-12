import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow-x: hidden;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const DetailsDiv = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const CountryName = styled.h3`
  font-size: 24px;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;

export const Flag = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 2px;
  height: 350px;
  width: 500px;
  background: red;
  margin-right: 2rem;

  @media (max-width: 600px) {
    height: 60vw;
    width: 80vw;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Detail = styled.div`
  .flex {
    display: flex;
    justify-content: space-between;
    gap: 7rem;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;
      gap: 0;
    }
  }

  .content {
    display: flex;
    margin-bottom: 1.2rem;

    p {
      font-size: 15px;
    }

    .api {
      margin-left: 8px;
      font-weight: 300;
      opacity: 0.7;
    }
  }
`;

export const Action = styled.div`
  height: 50px;
`;

export const Button = styled(Link)`
  height: 50px;
  background: ${({ theme }) => theme.items};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;
  padding: 10px 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: 0.8;
  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const BorderCountries = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }
  .borders {
    margin-left: 8px;
    display: flex;
    @media (max-width: 600px) {
      display: block;
      margin-top: 1rem;
      margin-left: 0;
      margin-bottom: 0.5rem;
    }

    .border {
      margin-right: 5px;
      font-weight: 300;
      opacity: 0.7;
      background: ${({ theme }) => theme.items};
      padding: 5px 10px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      @media (max-width: 600px) {
        display: block;
        margin-bottom: 0.5rem;
        margin-left: 0.2rem;
      }

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }
`;
