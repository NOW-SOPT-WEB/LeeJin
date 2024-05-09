import styled from "@emotion/styled";

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-auto-rows: minmax(215px, 1fr);
    justify-content: center;

    height: 68%;
    padding: 1rem 2rem;

    gap: 0.5rem 0.5rem;
    overflow-y: scroll;
`