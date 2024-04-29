import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    height: 20%;
    padding: 1.5rem;

    background-color: rgb(255, 255, 255, 0.7);
`;

export const TitleContiner = styled.div`
    display: flex;
    justify-content: center;
`
export const Title = styled.div`
    font-size: 2.5rem;
`;

export const resetBtn = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    right: 1rem;

    height: 2.5rem;
    padding: 1.5rem 2rem;

    cursor: pointer;
    border-radius: 6px;

    color: white;

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

export const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.7rem;
    font-size: 1.8rem;
    color: gray;
`;