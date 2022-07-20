import styled, { css } from "styled-components";

export const Menu = styled.aside`
    grid-area: sidebar;
    background-color: #B4C33A;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 70px;
    transition: all 0.5s;
    z-index: 99;

    input[type="checkbox"] {
        display: none;
    }

    ${props => props.open && css`
        width: 250px;
    `}
`

export const Toggle = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    height: 50px;
    cursor: pointer;
    margin-left: 4px;

    svg {
        color: #000;
    }
`

export const MenuList = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        height: 45px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        svg {
            color: #000;
        }
    }
`