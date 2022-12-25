//                                  BİSMİLLAHİRRAHMANİRRAHİM
//                                      ALLAHU  EKBER
//                                      ELHAMDÜLİLLAH



import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const ShareBox = styled.div`
visibility: ${({visibility}) => (visibility ? "visible" : "hidden")};
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

export const ShareContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const ShareText = styled.div`
color:#000;
text-align:center;
font-size: ${({fontSize}) => (fontSize)};
margin-top: 50px;
`


export const ShareIcon = styled.img`
width: ${({iconSize}) => (iconSize)};
position: absolute;
top: 20px;
right: 20px;
`

export const ShareItemContainer = styled.div`
margin-top: 20px;
    display: flex;
    align-items: center;
    border: 4px solid white;
    border-radius: 8px;
    padding: 10px;
    width: 90%;
`;

export const ShareItemIcon = styled.img`
    width: 70px;
    flex-shrink: 1;
    filter: invert(1);

`;

export const ShareItemText = styled.span`
    font-size: 1.1rem;
    flex-shrink: 2;
    text-align: center;
    margin-left: 20px;
    color: white;
`;