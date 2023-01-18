




import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const DialogBox = styled.div`
visibility: ${({visibility}) => (visibility ? "visible" : "hidden")};
height: ${({height}) => height};
width: 300px;
position: absolute; 
background-color:#04d654;
z-index:999;
left: 50%;
transform: translateX(-50%);
margin-top: ${({top}) => top};
box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-webkit-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-moz-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
transition: 0.5s all ease-in;
border-radius: 10px;
padding: 10px;

display:flex;
flex-direction: column;
align-items:center;
justify-content: space-between;

@media screen and (max-width: 480px){
    left: 50%;
    transform: translateX(-50%);
    margin-top: 15%;
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
margin-right: 5px;
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
position: fixed;
top: 10px;
right: 10px;
`

export const DialogHeader = styled.div`
    display: flex;
    position: relative;

`;


export const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 30px 0 30px;
`

export const Option = styled.div`
    padding: 10px;
    background-color: ${({notExist}) => notExist ? "gray" : "#FFBF17" } ;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0px 12px 12px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 12px 12px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 12px 12px 0px rgba(0,0,0,0.75);
    font-size: 0.9em;


    ${
        ({notExist}) => {
            if(!notExist){
                return `&:hover{
                            background-color: white;
                            color: black;
                        }`
            }
        }
    }

    
`;