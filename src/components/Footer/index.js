//                                          BİSMİLLAHİRRAHMANİRRAHİM


import React, {useEffect, useContext, useState} from 'react'
import Language from '../../strings/index';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
Business, BusinessWrap, BusinessLogo, WebsiteRights, BusinessIcons, BusinessIconLink, BusinessVisit } from "./FooterElements";
import {Linker} from '../Question/QuestionElements';
import { FaGithub } from "react-icons/fa";
import {FirebaseContext} from '../Firebase';



const Footer = () => {
    const db = useContext(FirebaseContext);
    const [ziyaretSayisi, setZiyaretSayisi] = useState(0)

    useEffect( () => {

        const fetchData =  async () => {
            await db.ziyaretSayisiArtir();
            setZiyaretSayisi(await db.ziyaretSayisiGetir())
        }
        fetchData();

    }, [])

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
                         {Language.Footer.aciz_kul}
                         <BusinessIcons>
                             <BusinessIconLink href="https://github.com/Yusuf-YENICERI/" target="_blank" aria-label="Github">
                                 <FaGithub></FaGithub>
                             </BusinessIconLink>
                         </BusinessIcons>

                         
                         <BusinessVisit>{Language.Footer.ziyaret[0]} {ziyaretSayisi} {Language.Footer.ziyaret[1]}</BusinessVisit>
                     </BusinessWrap>
                 </Business>
             </FooterWrapper>
             </FooterContainer>   
        </>
    )
}

export default Footer
