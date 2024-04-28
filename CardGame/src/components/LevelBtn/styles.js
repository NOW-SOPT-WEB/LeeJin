import styled from "@emotion/styled";

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;

    height: 2rem;
    margin: 1rem;
    gap: 2rem;
`

export const Btn = styled.div`
    display: flex;
    align-items: center;

    padding: 1.5rem 3rem;

    color: white;
    font-size: 1rem;
    border-radius: 6px;
    transition: top .01s linear;
    text-shadow: 0 1px 0 rgba(0,0,0,0.15);

    background-color: ${props => props.clicked ? "#F0D264" : "#6DA2D9"};
    box-shadow: ${props => props.clicked ?
            "0 0 0 1px #F0D264 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 rgba(196, 172, 83, .7), 0 8px 0 1px rgba(0,0,0,.4), 0 8px 8px 1px rgba(0,0,0,0.5)" :
            "0 0 0 1px #6698cb inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 rgba(110, 164, 219, .7), 0 8px 0 1px rgba(0,0,0,.4), 0 8px 8px 1px rgba(0,0,0,0.5)"
            };
       
    
    cursor: pointer;

    &:hover {
        background-color: ${props => props.clicked ? "#F0D264" : "#699DD1"};
    }

    &:active {
        box-shadow: 0 0 0 1px #6191C2 inset,
                0 0 0 2px rgba(255,255,255,0.15) inset,
                0 0 0 1px rgba(0,0,0,0.4);
    }
`