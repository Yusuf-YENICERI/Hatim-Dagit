//                                  BİSMİLLAHİRRAHMANİRRAHİM
//                                      ALLAHU  EKBER
//                                      ELHAMDÜLİLLAH



import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const QuestionContainer = styled.div`
    min-height: 500px;
    background-color: #91ffbb;
    
    @media screen and (max-width: 480px){
        min-height: 500px;
    }
    
`;

export const QuestionInnerContainer = styled.div`
    height: 150px;
    background-color: #91ffbb;
`

export const QuestionItem = styled.div`
    padding: 50px;
    font-size: 2.2rem;
    text-align: center;
    color: #000000;

    @media screen and (max-width: 480px){
        font-size:1.2rem; 
        padding-bottom: 0px;
    }
`

export const BackContainer=styled.div`
    padding-left: 50px;
    padding-top: 5px;

`

export const BackButtonIcon=styled.img`
    cursor: pointer;
    height: ${({hide})=>(hide ? '30px' : '0')};
`

export const RespondContainer = styled.div`
    background-color: #91ffbb;

    @media screen and (max-width: 480px){
    }
`
export const RespondInnerContainer = styled.div`
    padding: ${({hatimExists}) => hatimExists ? "0px" : "50px"};
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 480px){
        font-size:1rem; 
        display: flex;
    flex-direction: column;
    text-align:center;
    }
`
export const ResponseItem = styled(LinkR)`
    padding: 20px;
    margin: 0 10px;
    height: 100px;
    border-radius: 10px;
    background-color: #04d654;
    display: flex;
    flex-direction: column;
    text-align:center;
    justify-content: center;
    width: 200px;
    box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-webkit-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-moz-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
transition: 0.5s all ease-in;


@media screen and (max-width: 480px){
        padding: 5px;
        height: 90px;
        margin: 10px 0px;
    }

&:hover{
    transform: scale(1.1);
    transition: 0.5s all ease-in;
}
`

export const ResponseLogo = styled.img`
    height: ${({exist}) => (exist ? '50px' : '0px')};
    src: ${({isSrc}) => isSrc};
    
`

export const ResponseText = styled.div`
color:#000;
`

export const MevcutHatimTitle = styled.p`
margin-top: 60px;
text-align: center;
font-size: 1.6rem;

@media screen and (max-width: 480px){
    font-size: 1rem;
}
`;

export const MevcutHatimListe = styled.ul`
text-align:center;
margin-top: 10px;
`;

export const MevcutHatimListeEleman = styled.li`
list-style-type: disc;
line-height: 25px;
`;


export const MevcutHatimListeElemanLink = styled.a`
color: green;
`;

export const Linker = styled.a`
    color: black;
`

export const DialogBox = styled.div`
visibility: ${({visibility}) => (visibility ? "visible" : "hidden")};
height: ${({height}) => height};
width: 250px;
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
    margin-top: 30%;
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
`

export const DialogInputBox = styled.input`

`


