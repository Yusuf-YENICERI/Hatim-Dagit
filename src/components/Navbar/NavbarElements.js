//                                  BİSMİLLAHİRRAHMANİRRAHİM
//                                      ALLAHU  EKBER
//                                      ELHAMDÜLİLLAH



import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    /* background-color: rgba(0,0,0, 0.7); */
    background: ${({scrollNav}) => (scrollNav ? '#00ba47' : '#00ba47')};
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
    align-items: center;
    height: 80px;
    z-index:  1;
    width: 100%;
    padding: 0 5px;
    padding-right: 20px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.2rem;
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
        display: inline-block;
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
    font-size: 0.9rem;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
`

export const NavLinksR = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 0.9rem;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
`
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    font-size: 0.9rem;


    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FFBF17;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 13px;
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

export const InstallContainer = styled.div`
    padding: 10px;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    user-select: none; 
   -webkit-user-select: none; 
   -khtml-user-select: none; 
   -moz-user-select: none; 
   -ms-user-select: none; 
   display: none;

    @media screen and (min-width: 480px){
        
    }
`;

export const InstallText = styled.span`
    font-size: 0.85rem;
    color: white;
`;