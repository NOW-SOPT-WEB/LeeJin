import { styled } from "styled-components";

export const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 10rem;
    height: 2.5rem;
    padding: 1rem 2rem;

    cursor: pointer;
    border-radius: 6px;

    color: black;
    text-decoration: none;

    transition: top .01s linear;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);

    background-color: #F1C3CC;
    box-shadow: 0 0 0 1px #D69EAA inset,
            0 0 0 2px rgba(255,255,255,0.15) inset,
            0 8px 0 0 #D69EAA,
            0 8px 0 1px rgba(0,0,0,0.4),
            0 8px 8px 1px rgba(0,0,0,0.5);

    &:hover {
        background-color: #E6AFBB;
    }

    &:active {
        box-shadow: 0 0 0 1px #D69EAA inset,
                0 0 0 2px rgba(255,255,255,0.15) inset,
                0 0 0 1px rgba(0,0,0,0.4);
    }
`;