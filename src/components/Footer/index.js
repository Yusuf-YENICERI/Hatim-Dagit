//                                          BİSMİLLAHİRRAHMANİRRAHİM


import React from 'react'
import {Turkish, English} from '../../strings/index';
import detectLanguage from '../../common';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
Business, BusinessWrap, BusinessLogo, WebsiteRights, BusinessIcons, BusinessIconLink } from "./FooterElements";
import {Linker} from '../Question/QuestionElements';
import { FaGithub } from "react-icons/fa";
let Language;
if (detectLanguage() == "en-US")
    Language = English;
else
    Language = Turkish;

const Footer = () => {
    return (
        <>
         <FooterContainer id="hakkimda">
             <FooterWrapper>
                 {/* <FooterLinksContainer>
                     <FooterLinkWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle>
                                 {Language.Footer.Title}
                             </FooterLinkTitle>
    <FooterLink to={Language.Navbar.LinkHelpers[0]}>{Language.Navbar.Links[0]}</FooterLink>
    <FooterLink to={Language.Navbar.LinkHelpers[1]}>{Language.Navbar.Links[1]}</FooterLink>
    <FooterLink to={Language.Navbar.LinkHelpers[2]}>{Language.Navbar.Links[2]}</FooterLink>
    <FooterLink to={Language.Navbar.LinkHelpers[3]}>{Language.Navbar.Links[3]}</FooterLink>
    <FooterLink to={Language.Navbar.LinkHelpers[4]}>{Language.Navbar.Links[4]}</FooterLink>

                         </FooterLinkItems>
                     </FooterLinkWrapper>
                 </FooterLinksContainer> */}
                 <Business>
                     <BusinessWrap>
                         <BusinessLogo to="starting">
                             {Language.Navbar.Logo}
                         </BusinessLogo>
                         {/* <WebsiteRights>
                             {Language.Footer.websiteRights} <Linker href="http://carlcheo.com/startcoding" target="_blank">http://carlcheo.com/startcoding</Linker>
                         </WebsiteRights> */}
                         {Language.Footer.madeBy}
                         <BusinessIcons>
                             <BusinessIconLink href="https://github.com/Yusuf-YENICERI/" target="_blank" aria-label="Github">
                                 <FaGithub></FaGithub>
                             </BusinessIconLink>
                         </BusinessIcons>
                     </BusinessWrap>
                 </Business>
             </FooterWrapper>
             </FooterContainer>   
        </>
    )
}

export default Footer
