import styled from "@emotion/styled";

export const TableContainer = styled.div`
    display: grid;
    grid-auto-columns: minmax(150px, 1fr);
    grid-auto-rows: minmax(auto, 400px);
    flex-wrap: wrap;
    justify-content: center;

    height: 68%;
    padding: 0 2rem;

    gap: 1rem;
    overflow-y: scroll;

    background-color: blue;
`