

import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #00ba47;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen  ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    font-family: 'Orbitron', sans-serif;
    font-weight:400;

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 3rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 0.97fr;
    grid-template-rows: repeat(6, 80px);
    text-align:center;


    @media screen and (max-width: 480px){
        grid-template-columns: 0.9fr;
        grid-template-rows: repeat(6, 70px);
    }
`

export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #000;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarLinkR = styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #000;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content:center;
`

export const SidebarRouter = styled(LinkR)`
    border-radius: 50px;
    background: #adcdff;
    white-space: nowrap;
    padding: 16px 64px;
    margin-right: 20px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;

    }
`