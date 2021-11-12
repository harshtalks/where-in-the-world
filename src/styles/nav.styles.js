import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background: ${({ theme }) => theme.items};
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const NavBar = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 8px;
  }
`;

export const Logo = styled.h4`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 8px;
    font-size: 18px;
  }
`;
