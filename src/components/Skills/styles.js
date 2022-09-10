import styled from "styled-components";

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
            height: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            background-color: var(--color-primary-op05);
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: auto;
            height: 120px;
        }
    }
`