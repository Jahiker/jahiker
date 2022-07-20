import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 20px;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas: "sidebar header"
                         "sidebar content";
`