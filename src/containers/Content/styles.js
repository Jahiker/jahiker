import styled, { css } from "styled-components";

export const Content = styled.div`
    grid-area: content;
    padding: 20px;

    h1 {
        font-size: 4rem;
        color: var(--color-primary);
        margin-bottom: 5px;
    }

    h4 {
        font-size: 2.5rem;
        margin-bottom: 30px;
    }

    p {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`

export const Button = styled.a`
    margin: 20px 0;
    display: inline-flex;
    padding: 10px 30px;
    border-radius: 5px;
    font-weight: 500;
    text-decoration: none;
    font-size: 1.6rem;
    background-color: var(--color-light);
    color: var(--color-dark);

    ${props => props.primary && css`
        background-color: var(--color-primary);
        color: var(--color-light);

        &:hover {
            background-color: var(--color-primary-dark);
        }
    `}
`
