//                                  BİSMİLLAHİRRAHMANİRRAHİM
//                                      ALLAHU  EKBER
//                                      ELHAMDÜLİLLAH



import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const QuestionContainer = styled.div`
    height: 700px;
    background-color: #91ffbb;

    @media screen and (max-width: 480px){
        height: 1200px;
    }

`;

export const QuestionInnerContainer = styled.div`
    height: 120px;
    background-color: #91ffbb;

    @media screen and (max-width: 480px){
        height: 100px;
    }
`

export const QuestionItem = styled.div`
    padding: 30px;
    font-size: ${({fontSize})=>fontSize};
    text-align: center;
    color: #000000;

    @media screen and (max-width: 480px){
        font-size:${({fontSize})=>fontSize};
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
    visibility: ${({visibility}) => (visibility ? "visible" : "hidden")};
    background-color: #91ffbb;
    height: 300px;

    @media screen and (max-width: 480px){
        height: 600px;
    }
`

export const RespondOuterContainer = styled.div`
    padding: 10px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 480px){

    }
`

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
`
export const ResponseItem = styled.div`
    padding: 20px;
    margin: 10px;
    height: 90px;
    border-radius: 10px;
    background-color: ${({bgColor}) => (bgColor ? "#04d654" : "#FFBF17")} ;
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
`

export const ResponseLogo = styled.img`
    height: ${({exist}) => (exist ? '50px' : '0px')};
    src: ${({isSrc}) => isSrc};

`

export const ResponseText = styled.div`
overflow-wrap: break-word;
font-size: 1rem;
padding: 3px;
color:${({color})=>(color ? "#fff" : "#000")};
`

export const Linker = styled.a`
    color: black;
`

export const LoadingContainer = styled.div`
    visibility: ${({visibility})=>(visibility ? "visible" : "hidden")};
    color: #00569c;
    position: fixed;
    flex:1;
    left: 60%;
    margin-top: 20%;
    margin-left: -350px;
    width: 700px;
    @media screen and (max-width: 480px){
        left: 55%;
        margin-top: 40%;
        margin-left: -125px;
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

@media screen and (max-width: 960px){
    bottom: 5%;
    right: 12%;
    position: fixed;
    }


`

export const CopyItem = styled.p`
    font-size: 0.7rem;
`

export const CopyIcon = styled.img`
width: ${({iconSize}) => (iconSize)};
align-self: ${({alignEnd}) => (alignEnd ? "flex-end" : "")};
`




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
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height: 80px;
    z-index:  1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkS)`
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
`
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
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
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
`
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;


    @media screen and (max-width: 768px){
        display: none;
    }
`

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
`

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
`