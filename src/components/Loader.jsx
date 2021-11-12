import styled from "styled-components";
const Loader = () => {
  return (
    <Container>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
};
export default Loader;

const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 60vh;
  .toggle-loader {
    position: absolute;
    top: 40px;
    right: 40px;

    padding: 10px 40px;

    color: #040808;

    background-color: #2eb69c;
    box-shadow: 0 0 6px #2eb69c;

    border: 0;
    border-radius: 4px;

    cursor: pointer;

    transition: box-shadow 0.2s ease;

    &:hover,
    &:focus {
      box-shadow: 0 0 10px #2eb69c;
    }

    &:active {
      box-shadow: 0 0 2px #2eb69c;
    }
  }

  .loader {
    --loader-color: #2eb69c;
    --loader-shadow-color: #2eb69c;

    --loader-part-size: 24px;
    --loader-size: calc(var(--loader-part-size) * 3);

    position: relative;

    width: var(--loader-size);
    height: var(--loader-size);

    &.hidden {
      display: none;
    }

    span {
      position: absolute;

      display: flex;
      align-items: center;
      justify-content: center;

      width: var(--loader-part-size);
      height: var(--loader-part-size);

      background-color: var(--loader-color);
      box-shadow: 0 0 6px var(--loader-shadow-color);

      transform-origin: center center;

      animation: main 6s ease infinite, fading 6s ease infinite;

      &:nth-child(1) {
        --translationValue: calc(var(--loader-part-size) / 4),
          calc(var(--loader-part-size) / 4);
        --translationValueWhenAssebled: var(--loader-part-size), 0px;
        --translationBeforeDisassembling: calc(var(--loader-part-size) / 4),
          calc(var(--loader-part-size) / 4 * -1);

        top: 0;
        left: var(--loader-part-size);

        animation-delay: 0s, 0.2s;
      }

      &:nth-child(2) {
        --translationValue: calc(var(--loader-part-size) / 4),
          calc(var(--loader-part-size) / 4 * -1);
        --translationValueWhenAssebled: 0px, calc(var(--loader-part-size) * -1);
        --translationBeforeDisassembling: calc(var(--loader-part-size) / 4 * -1),
          calc(var(--loader-part-size) / 4 * -1);

        top: var(--loader-part-size);
        left: 0;
      }

      &:nth-child(3) {
        --translationValue: calc(var(--loader-part-size) / 4 * -1),
          calc(var(--loader-part-size) / 4);
        --translationValueWhenAssebled: 0px, var(--loader-part-size);
        --translationBeforeDisassembling: calc(var(--loader-part-size) / 4),
          calc(var(--loader-part-size) / 4);

        top: var(--loader-part-size);
        right: 0;

        animation-delay: 0s, 0.4s;
      }

      &:nth-child(4) {
        --translationValue: calc(var(--loader-part-size) / 4 * -1),
          calc(var(--loader-part-size) / 4 * -1);
        --translationValueWhenAssebled: calc(var(--loader-part-size) * -1), 0px;
        --translationBeforeDisassembling: calc(var(--loader-part-size) / 4 * -1),
          calc(var(--loader-part-size) / 4);

        bottom: 0;
        left: var(--loader-part-size);

        animation-delay: 0s, 0.6s;
      }
    }
  }

  @keyframes fading {
    0% {
      opacity: 1;
    }
    8% {
      opacity: 0.2;
    }
    16.6%,
    33.2% {
      opacity: 1;
    }
    41.6% {
      opacity: 0.2;
    }
    50%,
    66.6% {
      opacity: 1;
    }
    74.9% {
      opacity: 0.2;
    }
    83.2%,
    100% {
      opacity: 1;
    }
  }

  @keyframes main {
    0%,
    25% {
      transform: rotate(0) translate(0, 0);
    }
    33.3%,
    58.3% {
      transform: rotate(45deg) translate(var(--translationValue));
    }
    62.45% {
      transform: rotate(90deg) translate(var(--translationValueWhenAssebled));
    }
    66.6%,
    91.6% {
      transform: rotate(135deg) translate(var(--translationBeforeDisassembling));
    }
    100% {
      transform: rotate(180deg) translate(0, 0);
    }
  }
`;
