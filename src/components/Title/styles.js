import styled, {css} from "styled-components";

export const TitleStyled = styled.div`
  h1 {
    margin: 25px 0;
    font-size: 3.5rem;
    line-height: 4.5rem;
  }

  h2 {
    margin: 14px 0;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  h3 {
    margin: 10px 0;
    font-size: 2rem;
    line-height: 3rem;
  }

  h4 {
    margin: 8px 0;
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  h5 {
    margin: 6px 0;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  h6 {
    margin: 4px 0;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  ${props => props.primary && css`
    color: var(--color-primary);
  `}
`;
