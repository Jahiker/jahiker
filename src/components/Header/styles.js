import styled, { css } from "styled-components";

export const HeaderComponent = styled.header`
    grid-area: header;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Avatar = styled.figure`
    overflow: hidden;
    border-radius: 50%;

    ${props => props.size && css`
        height: ${props.size}px;
        width: ${props.size}px;
    `}

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`