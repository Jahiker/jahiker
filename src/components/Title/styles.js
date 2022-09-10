import styled, {css} from "styled-components";

export const TitleStyled = styled.div`
  h1 {
    margin: 25px 0;
    font-size: 35px;
    line-height: 45px;
  }

  h2 {
    margin: 14px 0;
    font-size: 24px;
    line-height: 34px;
  }

  h3 {
    margin: 10px 0;
    font-size: 20px;
    line-height: 30px;
  }

  h4 {
    margin: 8px 0;
    font-size: 18px;
    line-height: 28px;
  }

  h5 {
    margin: 6px 0;
    font-size: 16px;
    line-height: 26px;
  }

  h6 {
    margin: 4px 0;
    font-size: 14px;
    line-height: 24px;
  }

  ${props => props.primary && css`
    color: var(--color-primary);
  `}
`;
