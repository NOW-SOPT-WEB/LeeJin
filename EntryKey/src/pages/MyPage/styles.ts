import styled from "styled-components";

export const ListWrapper = styled.div`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const List = styled.div`
    display: flex;
    margin-top: 10%;
`;

export const ListData = styled.div`
    color: gray;
`;

export const PwWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 8rem 30% 0 30%;
    background-color: #2FA87F;
`;

export const PwTitleWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;
export const PwTitle = styled.div`

`;

export const PwListTitle = styled.div`
    width: 120px;
`;

export const ToggleWrapper = styled.div<{isVisible: boolean}>`
    display: ${(props) => props.isVisible ? 'block' : 'none'};
`;