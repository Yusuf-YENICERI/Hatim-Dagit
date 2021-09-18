



import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';




export const DialogBox = styled.div`
visibility: ${({visibility}) => (visibility ? "visible" : "hidden")};
height: 300px;
width: 300px;
position: fixed;
background-color:#04d654;
z-index:999;
margin-left:39%;
margin-top: 5%;
box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-webkit-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-moz-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
transition: 0.5s all ease-in;
border-radius: 10px;
padding: 10px;

display:flex;
flex-direction: column;
align-items:center;
justify-content: space-evenly;

@media screen and (max-width: 480px){
        margin-left: 8%;
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
`

export const DialogInputBox = styled.input`

`