








import styled from 'styled-components'






export const Container = styled.div`
    z-index: 100;
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 25px;
`;

export const MessageContainer = styled.div`
background-color: transparent;
border: 1px solid transparent;
border-radius: 15px;
height: 100%;
width: 100%;
background-color: white;

`;

export const MessageLayout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
`;

export const MessageMain = styled.div`

`

export const MessageButton = styled.button`
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;

    &:hover{
        background-color: green;
    }
`;