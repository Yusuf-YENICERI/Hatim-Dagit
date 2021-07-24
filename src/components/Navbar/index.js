//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavIcon} from './NavbarElements';
import {Turkish, English} from '../../strings/index';
import detectLanguage from '../../common';
import { FaGithub } from "react-icons/fa";

let Language;
if (detectLanguage() == "en-US")
    Language = English;
else
    Language = Turkish;

const Navbar = ({ toggle, font }) => {

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
        <Nav scrollNav={scrollNav} font={font}>
            <NavbarContainer>
                <NavLogo to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                >
                    {Language.Navbar.Logo}
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={100}
                        to={Language.Navbar.LinkHelpers[0]}>{Language.Navbar.Links[0]}</NavLinks>
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
