import styled from "@emotion/styled";

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(auto, 200px));
    grid-auto-rows: minmax(auto, 400px);
    justify-content: center;

    height: 68%;
    padding: 1rem 1rem;

    gap: 1rem 1rem;
    overflow-y: scroll;

    /* background-color: blue; */
`