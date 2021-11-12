import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.items};
  display: flex;
  flex-direction: column;
  width: 240px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: opacity 0.1s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const Text = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Image = styled.div`
  min-height: 150px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.3);
  }
`;

export const CountryName = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 10px;
`;

export const Details = styled.div`
  .detail {
    display: flex;
    gap: 4px;

    p {
      font-size: 14px;
      line-height: 1.4;
      font-weight: 400;
    }
    .output {
      font-family: 200;
      opacity: 0.8;
    }
  }
`;
