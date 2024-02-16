import styled from 'styled-components';





export const Container =styled.div<{visible: boolean}>`
    position: fixed;
    z-index: ${({visible}) => (visible ? 10 : -1)};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const YesNoContainer = styled.div`
    border: 1px solid #00ba47;
    border-radius: 6px;
    background-color: #00ba47;
    width: 90%;
    margin-bottom: 100px;
`;

export const YesNoLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

export const YesNoText = styled.p`
    font-size: 1rem;
    padding: 20px;
    text-align: center;

`;

export const YesNoButtonContainer = styled.div`
    padding: 20px;
    width: 100%;
`;

export const YesNoButtonLayout = styled.div`
display: flex;
justify-content: space-evenly;
`;
