import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    figure {
      height: 85%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: var(--color-primary-op05);
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      ${(props) =>
        props.largerIcon &&
        css`
          width: 85%;
          height: unset;
        `}
    }

    img {
      width: auto;
      height: 100px;

      ${(props) =>
        props.largerIcon &&
        css`
          height: auto;
          width: 150px;
        `}
    }
  }

  @media screen and (max-width: 769px) {
    a {
      img {
        width: auto;
        height: 70px;

        ${(props) =>
          props.largerIcon &&
          css`
            height: auto;
            width: 100px;
          `}
      }
    }
  }

  @media screen and (max-width: 376px) {
    a {
      img {
        width: auto;
        height: 50px;

        ${(props) =>
          props.largerIcon &&
          css`
            height: auto;
            width: 80px;
          `}
      }
    }
  }
`;
