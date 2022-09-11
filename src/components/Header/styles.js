import styled, { css } from "styled-components";

export const HeaderComponent = styled.header`
    grid-area: header;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 768px) {
        gap: 20px;
    }
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

export const Settings = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    position: relative;
    color: var(--color-primary);

    FiSettings {
        font-size: 3rem;
    }
`

export const SettingsPanel = styled.div`
    padding: 10px;
    width: 100px;
    position: absolute;
    bottom: -35px;
    left: -120%;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.3);

    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    button {
        background-color: transparent;
        border: none;
    }
`