import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #00ba47;
    overflow-x: hidden;
    color:#fff;
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1';
    max-width: 1100px;
    margin: 0 auto;

    @media screen and (max-width: 480px){
        grid-template-areas: 'col2 col2' 'col1 col1' ;
    }
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    grid-area: col2;
    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: left;
    width: 250px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;

   
`;

export const FooterLink = styled (LinkS)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

export const Business = styled.div`
    max-width: 1000px;
    width: 100%;
    grid-area: col1;

`;

export const BusinessWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
        margin: 40px auto 0 auto;
    }
`;

export const BusinessLogo = styled (LinkS)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    margin-top: 30px;

    @media screen and (max-width: 380px){
        font-size: 1rem;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const BusinessIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    margin-top: -10px;
`;

export const BusinessIconLink = styled.a`
    color:#fff;
    font-size: 24px;
`;

export const BusinessVisit = styled.p`
    margin-top: 12px;
    font-size: 0.8rem;
`;

export const BusinessVersion = styled.p`
    margin-top: 12px;
    font-size: 0.8rem;
`;

export const BusinessMainPage = styled (LinkR)`
    font-size: 0.8rem;
    color: white;
    margin-top: -70px;
`;

export const BusinessFeedback = styled.div`

@media screen and (min-width:480px){
    display: none;
}

    font-size: 0.8rem;
    color: white;
    margin-top: 20px;
    text-decoration: underline;
`;

export const BusinessPrivacyPolicy = styled (LinkR)`

    font-size: 0.8rem;
    color: white;
    margin-top: 40px;
    text-decoration: underline;
`;

export const BusinessTermsConditions = styled (LinkR)`


    font-size: 0.8rem;
    color: white;
    margin-top: 20px;
    text-decoration: underline;
`;

export const BusinessCookies = styled (LinkR)`

    font-size: 0.8rem;
    color: white;
    margin-top: 20px;
    margin-bottom: 80px;
    text-decoration: underline;
`;
