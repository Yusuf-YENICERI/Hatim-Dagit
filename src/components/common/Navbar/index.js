//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksR, NavBtn, NavBtnLink, NavIcon, InstallContainer, InstallText} from './NavbarElements';
import Language from '../../../strings/index';
import { FaGithub } from "react-icons/fa";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './navbar.css'
import { setLanguage } from "../../../common";
import { MediaQuery, Text } from "@mantine/core";

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }


    

    useEffect(() => {

        window.addEventListener('scroll', changeNav)
        window.addEventListener('resize', handleWindowSizeChange);
        console.log(isMobile)

        
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

let isMobile = (width <= 768);

    return (
       <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                >
                    {Language.Navbar.Logo}
                </NavLogo>

                <InstallContainer id={"pwabutton"} onClick={()=>{
                }}>
                    <InstallText>{Language.Navbar.Pwa}</InstallText>
                </InstallContainer>

                <div style={{display: 'flex', flexDirection: 'column', fontSize: '0.7em', position: 'relative'}}>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <MediaQuery largerThan={"sm"} styles={{display: 'none'}}>
                    <span style={{position: 'absolute', bottom: '-6px', color: 'white', userSelect: 'none'}}>{Language.Navbar.Menu}</span>
                </MediaQuery>
                </div>
                <NavMenu>
                    <NavItem>
                        <NavLinksR
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={100}
                        to={Language.Navbar.LinkHelpers[0]}>{Language.Navbar.Links[0]}</NavLinksR>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={100}
                        to={Language.Navbar.LinkHelpers[1]}>{Language.Navbar.Links[1]}</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={100}
                        to={Language.Navbar.LinkHelpers[2]}>         
                            <Dropdown controlClassName='dropdowner' arrowClosed={<span></span>} arrowOpen={<span></span>} options={Language.Navbar.Languages} onChange={(option)=>{
                            setLanguage(option.value)
                            window.location.reload();

                        }} value={""} placeholder={Language.Navbar.Links[2]} />
                        
                        </NavLinks>
       
                    </NavItem>
                    <NavBtn>
                    <NavBtnLink
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={100}
                    onClick={()=>{
                        window.location.href = "mailto:hep.beraber.okuyalim@gmail.com";
                    }} >{Language.Navbar.Buttons[0]}</NavBtnLink>
                </NavBtn>
                    {/* <NavItem>
                        <NavLinks
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={100}
                        to={Language.Navbar.LinkHelpers[1]}>{Language.Navbar.Links[1]}</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={100}
                        to={Language.Navbar.LinkHelpers[2]}>{Language.Navbar.Links[2]}</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={100}
                        to={Language.Navbar.LinkHelpers[3]}>{Language.Navbar.Links[3]}</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={isMobile ? 50 : 200}
                        to={Language.Navbar.LinkHelpers[4]}>{Language.Navbar.Links[4]}</NavLinks>
                    </NavItem> */}
                </NavMenu>
               
                {/* <NavIcon href="https://github.com/Yusuf-YENICERI/" target="_blank">
                    <FaGithub></FaGithub>
                </NavIcon> */}
                
            </NavbarContainer>
        </Nav>
       </>
    )
};

export default Navbar
