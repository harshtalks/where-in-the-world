import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 3rem 0;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  @media (max-width: 500px) {
    height: 100px;
    flex-direction: column;
  }
`;

export const Search = styled.form`
  height: 100%;
  background: ${({ theme }) => theme.items};
  display: flex;
  align-items: center;
  padding: 0 1em;
  border-radius: 3px;
  width: 450px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 500px) {
    width: 90%;
    margin-bottom: 20px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.text};
    margin-right: 8px;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    font-size: 18px;
    color: ${({ theme }) => theme.text};

    &::placeholder {
      color: ${({ theme }) => (theme.input ? theme.input : theme.white)};
      font-size: 16px;
    }
  }
`;

export const Region = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 100%;
  background: ${({ theme }) => theme.items};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  cursor: pointer;
  position: Relative;
  svg {
    height: 16px;
    width: 16px;
    fill: ${({ theme }) => theme.text};
    margin-left: 10px;
  }

  .regions {
    transition: all 0.25s ease-in-out;
    position: absolute;
    background: inherit;
    top: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 100;
    background: ${({ theme }) => theme.bg};
    p {
      margin: 10px 20px;
      opacity: 0.6;

      &:hover,
      &:active {
        opacity: 1;
      }
    }
  }
`;
