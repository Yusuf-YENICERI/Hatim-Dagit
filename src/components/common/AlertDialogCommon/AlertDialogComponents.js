


import styled from 'styled-components';




export const Container = styled.div`
    display: ${({alertVisible})=>alertVisible ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    height: 100%;
    width: 100%;
`;


export const AlertContainer = styled.div`
    border: 1px solid #00ba47;
    border-radius: 6px;
    background-color: #00ba47;
    margin-bottom: 100px;
    width: 90%;
`;

export const AlertLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const AlertText = styled.div`
    font-size: 1.2rem;
    padding: 30px;
`;

export const YesButton = styled.button`
    background-color: green;
    color: white;
    border: 1px solid green;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px 0 10px;
`;

export const NoButton = styled.button`
    background-color: red;
    color: white;
    border: 1px solid red;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px 0 10px;
`;

