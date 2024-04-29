import styled from "@emotion/styled";

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 50%;
    height: 50%;

    padding: 1rem;

    background-color: white;
    background-image: url(${(props) => props.src});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 20px;
    box-shadow: 24px;

    transform: translate(-50%, -50%);
`

export const closeBtn = styled.div`
    display: flex;
    justify-content: end;
`;

export const homeBtn = styled.div`
    position: absolute;
    top: 58%;
    left: 50%;

    padding: 0.8rem 2rem;

    border-radius: 20px;

    color: white;
    background-color: black;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;