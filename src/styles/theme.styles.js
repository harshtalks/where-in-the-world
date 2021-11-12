import styled from "styled-components";

export const ChangeTheme = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.text};
    margin-right: 8px;

    @media (max-width: 600px) {
      width: 15px;
      height: 15px;
    }
  }
`;

export const Text = styled.p`
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
