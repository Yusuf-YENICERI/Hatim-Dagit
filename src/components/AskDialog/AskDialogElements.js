




import styled from 'styled-components';

export const DialogBox = styled.div`
    visibility: ${({visibility}) => (visibility ? "visible" : "hidden")};
    height: ${({height}) => height};
    width: 250px;
    position: fixed; 
    background-color:#04d654;
    z-index:999;
    left: 50%;
    transform: translateX(-50%);
    top: ${({top}) => top};
    box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
    -webkit-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
    -moz-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
    transition: 0.5s all ease-in;
    border-radius: 10px;
    padding: 10px;
    margin-top: 80px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;

    @media screen and (max-width: 480px){
        left: 50%;
        transform: translateX(-50%);
        margin-top: 80px;
        top: ${({top}) => top};    
        }
`

export const DialogContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const DialogText = styled.div`
    color:#000;
    text-align:center;
    font-size: ${({fontSize}) => (fontSize)};
    margin-top: 5px;
`

export const DialogTextSpan = styled.span`
    color:#000;
    opacity: 0.8;
    font-size: 0.8rem;
    margin: 3px;
`

export const DialogLink = styled.div`
    color:#000;
    text-align:center;
    background-color: #91ffbb;
    font-size: ${({fontSize}) => (fontSize)};
    border-radius: 3px;
`

export const DialogIcon = styled.img`
    width: ${({iconSize}) => (iconSize)};
    align-self: ${({alignEnd}) => (alignEnd ? "flex-end" : "")};
    margin-right: 20px;
    margin-bottom: 10px;
`

export const DialogInputBox = styled.input`
    width: 200px;
`

