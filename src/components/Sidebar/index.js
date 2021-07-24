//                              BİSMİLLAHİRRAHMANİRRAHİM


import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRouter} from './SiderbarElements';
import {Turkish, English} from '../../strings/index';
import detectLanguage from '../../common';

let Language;
if (detectLanguage() == "en-US")
    Language = English;
else
    Language = Turkish;

const Sidebar = ({ toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={0} to={Language.Navbar.LinkHelpers[0]} onClick={toggle}>{Language.Navbar.Links[0]}</SidebarLink>
                    {/* <SidebarLink smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={170} to={Language.Navbar.LinkHelpers[1]} onClick={toggle}>{Language.Navbar.Links[1]}</SidebarLink>
                    <SidebarLink smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={170} to={Language.Navbar.LinkHelpers[2]} onClick={toggle}>{Language.Navbar.Links[2]}</SidebarLink>
                    <SidebarLink smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={170} to={Language.Navbar.LinkHelpers[3]} onClick={toggle}>{Language.Navbar.Links[3]}</SidebarLink>
                        <SidebarLink smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={0} to={Language.Navbar.LinkHelpers[4]} onClick={toggle}>{Language.Navbar.Links[4]}</SidebarLink> */}
                    
                </SidebarMenu>

                <SidebarBtnWrap>
                    <SidebarRouter onClick={()=>{
                        window.location.href = "mailto:hep.beraber.okuyalim@gmail.com";
                    }}>{Language.Navbar.Buttons[0]}</SidebarRouter>
                </SidebarBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
