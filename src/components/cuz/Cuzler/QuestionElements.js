//                                  BİSMİLLAHİRRAHMANİRRAHİM
//                                      ALLAHU  EKBER
//                                      ELHAMDÜLİLLAH

import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {Add, ChevronDown, ChevronUp} from '@styled-icons/ionicons-outline';

export const QuestionContainer = styled.div`
    background-color: #91ffbb;
    position: relative;
    min-height: ${({minHeight}) => minHeight};
    padding-bottom: 40px;
    @media screen and (max-width: 480px){
    }
`;

export const HatimContainer = styled.div`
    transform-origin: top;
    margin-top: 0px;
    transform: ${({visibility}) => (!visibility ? 'scaleY(0)' : 'scaleY(1)')};
    height: ${({visibility}) => {
              if (!visibility) {
                return '0';
              } else {
                return '100%';
              }
            }};
    transition: height 0ms 1s ease, transform 1s 0ms ease;
    overflow: hidden;
`;

export const QuestionInnerContainer = styled.div`
    background-color: #91ffbb;

    @media screen and (max-width: 480px){
    }
`;

export const QuestionItem = styled.div`
    padding: 30px;
    font-size: ${({fontSize}) => fontSize};
    text-align: center;
    position: relative;
    color: #000000;
    

    @media screen and (max-width: 480px){
        font-size:${({fontSize}) => fontSize};
        padding-bottom: 0px;
    }
`;

export const CuzlerFinishDate = styled.div`
    margin-top: 20px;
    margin-right: 50px;
    margin-left: 50px;

    font-size: ${({fontSize}) => fontSize};
    text-align: center;
    position: relative;
    color: #000000;
    opacity: 0.6;
    

    @media screen and (max-width: 480px){
        font-size:${({fontSize}) => fontSize};
        padding-bottom: 0px;
        margin-bottom: 30px;
    }
`;

export const BackContainer = styled.div`
    padding-left: 50px;
    padding-top: 5px;

`;

export const BackButtonIcon = styled.img`
    cursor: pointer;
    height: ${({hide}) => (hide ? '30px' : '0')};
`;

export const RespondContainer = styled.div`
    visibility: ${({visibility}) => (visibility ? 'visible' : 'hidden')};
    background-color: #91ffbb;

    @media screen and (max-width: 480px){
    }
`;

export const RespondOuterContainer = styled.div`
    padding: 10px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 480px){

    }
`;

export const RespondInnerContainer = styled.div`
    padding: 50px;
    /* background-color: red; */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; */
    display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto auto auto ;
        grid-auto-flow: row;
        grid-row-gap: 30px;

    @media screen and (max-width: 480px){
        font-size:1rem;
        display: grid;
        grid-template-rows: auto auto auto auto auto auto auto auto auto auto ;
        grid-auto-flow: column;
    
        /* display: flex;
    flex-direction: column; */
    text-align:center;
    }

    @media screen and (max-width: 768px) and (min-width: 480px){
        grid-template-columns: auto auto auto auto ;
        grid-auto-flow: row;
    }

    @media screen and (max-width: 1240px) and (min-width: 768px){
        grid-template-columns: auto auto auto auto auto auto ;
        grid-auto-flow: row;
    }
`;
export const ResponseItem = styled.div`
    padding: 20px;
    margin: 10px;
    height: 90px;
    border-radius: 10px;
    background-color: ${({bgColor}) => (bgColor ? '#04d654' : '#FFBF17')} ;
    /* #04d654; */
    display: flex;
    flex-direction: column;
    text-align:center;
    justify-content: center;
    width: 105px;
    box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-webkit-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
-moz-box-shadow: -1px 24px 29px -8px rgba(0,0,0,1);
transition: 0.5s all ease-in;
    cursor: pointer;


@media screen and (max-width: 480px){
        padding: 5px;
        height: 70px;
        margin: 0px 6px;
    }

&:hover{
    transform: scale(1.1);
    transition: 0.5s all ease-in;
}
`;

export const ResponseLogo = styled.img`
    height: ${({exist}) => (exist ? '50px' : '0px')};
    src: ${({isSrc}) => isSrc};

`;

export const ResponseText = styled.div`
overflow-wrap: break-word;
font-size: 1rem;
padding: 3px;
color:${({color}) => (color ? '#fff' : '#000')};
`;

export const Linker = styled.a`
    color: black;
`;

export const LoadingContainer = styled.div`
    visibility: ${({visibility}) => (visibility ? 'visible' : 'hidden')};
    color: #00569c;
    position: fixed;
    flex:1;
    left: 50%;
    margin-top: 20%;
    transform: translateX(-50%);
    @media screen and (max-width: 480px){
        margin-top: 40%;
        left: 50%;
        transform: translateX(-50%);
        width: 250px;
}
`;

export const LoadingItem = styled.p`
    font-size:3rem;

    @media screen and (max-width: 480px){
        font-size: 1.6rem;
        
    }
`;

export const DialogBox = styled.div`
visibility: ${({visibility}) => (visibility ? 'visible' : 'hidden')};
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
`;

export const DialogContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const DialogText = styled.div`
color:#000;
text-align:center;
font-size: ${({fontSize}) => fontSize};
`;

export const DialogLink = styled.div`
color:#000;
text-align:center;
background-color: #91ffbb;
font-size: ${({fontSize}) => fontSize};
border-radius: 3px;
`;

export const DialogIcon = styled.img`
width: ${({iconSize}) => iconSize};
align-self: ${({alignEnd}) => (alignEnd ? 'flex-end' : '')};
`;

export const DialogInputBox = styled.input`

`;

export const CopyContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    width: 90px;
    position: fixed;
    bottom: 10%;
    right: 3%;
    background-color: rgb(192, 252, 208, 0.5);
    border-radius: 20px;
    /* border: solid;
    border-color: black;
    border-width: 1px; */
transition: 0.5s all ease-in;
padding: 8px;
z-index: 10;

@media screen and (max-width: 960px){
    bottom: 5%;
    right: 12%;
    position: fixed;
    }


`;

export const CopyItem = styled.p`
    font-size: 0.7rem;
`;

export const CopyIcon = styled.img`
width: ${({iconSize}) => iconSize};
align-self: ${({alignEnd}) => (alignEnd ? 'flex-end' : '')};
`;

export const ShareContainer = styled.div`
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    width: 90px;
    position: fixed;
    bottom: 23%;
    right: 3%;
    background-color: rgb(192, 252, 208, 0.5);
    border-radius: 20px;
    /* border: solid;
    border-color: black;
    border-width: 1px; */
transition: 0.5s all ease-in;
padding: 8px;
    display: none;
    z-index:10;

@media screen and (max-width: 960px){
    bottom: 17%;
    right: 12%;
    position: fixed;
    display:flex;
    }


`;

export const ShareItem = styled.p`
    font-size: 0.7rem;
`;

export const ShareIcon = styled.img`
width: ${({iconSize}) => iconSize};
align-self: ${({alignEnd}) => (alignEnd ? 'flex-end' : '')};
`;

export const Nav = styled.nav`
    /* background-color: rgba(0,0,0, 0.7); */
    background: ${({scrollNav}) => (scrollNav ? '#fff' : '#1167f2')};
    height: 80px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    font-family: 'Orbitron', sans-serif;
    font-weight:400;
    transition: 0.8s all ease;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

    /* @media screen and (max-width: 768px){
        margin-top: 0;
    } */
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height: 80px;
    z-index:  1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;
export const NavLogo = styled (LinkS)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left:24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 480px){
        font-size:1.1rem;

    }
`;
export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: white;
        cursor:pointer;

    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled (LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;


    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled.div`
    border-radius: 50px;
    background: #FFBF17;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavIcon = styled.a`
    color: #01bf71;
    display:flex;
    align-items: center;
    margin: 0 -100px;
    font-size: 40px;

    @media screen and (max-width: 768px){
        display: none;
    }
    &:hover{
        transform: scale(1.02);
    }
`;

export const YeniHatimWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const YeniHatimContainer = styled.div`
`;

export const YeniHatimButton = styled.button`
    margin: 10px;
    border: 4px solid #00ba47;
    border-radius: 10px;
    padding: 10px;
    background-color: transparent;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 480px){
        margin: 40px;
    }
`;

export const YeniHatimText = styled.span`
    color: #00ba47;
    margin-left: 10px;
    
    ::before{
       content : '';
       position: absolute;
       left: 40px;
       width: 1px;
       height: 30px;
       background-color: #00ba47;
    }

`;

export const YeniHatimIcon = styled (Add)`
    width: 30px;
    color: #00ba47;

    
`;

export const HatimHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const HatimIconContainer = styled.div`
    color: black;
    position: absolute;
    right: 30px;
    top: 20px;
    border: 2px solid black;
    border-radius: 20px;
    padding: 5px;
    z-index: 9;
    box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.51);
-webkit-box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 6px 11px 0px rgba(0,0,0,0.51);

`;

export const HatimIconText = styled.div`
    position: relative;
    font-size: 0.8rem;
    margin-top: -15px;
`;

export const HideHatimIcon = styled.div`
`;

export const ShowHatimIcon = styled.div`

`;

export const CuzlerDescription = styled.div`
    font-size: 1.2rem;
    text-align: center;
    margin-right: 40px;
    margin-left: 40px;
`;

export const RefreshKhatmsContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    width: 80px;
    background-color: rgb(192, 252, 208, 0.5);
    border-radius: 20px;
    transition: 0.5s all ease-in;
    padding: 2px;
    margin-top: 10px;


`;

export const RefreshKhatmsItem = styled.p`
    font-size: 0.6rem;
    color: green;
`;

export const RefreshKhatmsIcon = styled.img`
width: ${({iconSize}) => iconSize};
align-self: ${({alignEnd}) => (alignEnd ? 'flex-end' : '')};
`;
