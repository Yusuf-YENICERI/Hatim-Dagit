//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {QuestionContainer, QuestionInnerContainer, QuestionItem, RespondContainer, RespondInnerContainer, ResponseItem
, ResponseLogo, ResponseText, BackButtonIcon, BackContainer, DialogBox, DialogText, DialogLink, DialogIcon, DialogContainer, DialogInputBox,
MevcutHatimTitle, MevcutHatimListe, MevcutHatimListeEleman, MevcutHatimListeElemanLink} from './QuestionElements';
import Language from '../../strings/index';
import { FaGithub } from "react-icons/fa";
import backButton from '../../icons/button.svg';
import Firebase, {FirebaseContext} from '../Firebase';
import copy from '../../icons/copy.svg';
import close from '../../icons/close.svg';
import { NavBtnLink } from '../Navbar/NavbarElements';

const AskDialog = ({ firebase, setHatimKey, setYazilar, propHideDialogBox, askDialogBox, setAskDialogBox, hatimKonu, setHatimKonu }) => {
    return (
    <DialogBox visibility={askDialogBox} height={"200px"} top={"10%"}>

                <DialogContainer>
                <DialogText fontSize={"20px"}>
                {Language["/"].Button.Header.Text}
                </DialogText>

                {<div style={{height:'10px'}}></div>}

                <DialogInputBox onChange = {(event)=>{
                    setHatimKonu(event.target.value);
                    
                }}/>

                {<div style={{height:'10px'}}></div>}

             
                </DialogContainer>

            <NavBtnLink onClick={async ()=>{
                setAskDialogBox(false);
                propHideDialogBox.setHideDialogBox(true);
                let _hatimKey = await firebase.yeniHatim(hatimKonu);
                setHatimKey(_hatimKey);
                setYazilar({
                    baslik:Language["/"].Button.Final.After.Header,
                    link: "https://hatim-dagit.web.app/cuz/" + _hatimKey,
                    cevap:Language["/"].Button.Final.After.Button
                })  
            }}>{Language["/"].Button.Header.Button}</NavBtnLink>

            </DialogBox>
    );
}

const Constr = ({toggle}) => {
    return <FirebaseContext.Consumer>
                    {
                        firebase => {

                        return <Question toggle={toggle} firebase={firebase}></Question>

                    }
                }
            </FirebaseContext.Consumer>
}

const Question = ({ firebase, toggle }) => {

    const [datas, setDatas] = useState(-1);
    const [routes, setRoutes] = useState([]);
    const [hatimKey, setHatimKey] = useState("");
    const [hideDialogBox, setHideDialogBox] = useState(false);
    const [askDialogBox, setAskDialogBox] = useState(false);
    const [linkKopyala, setLinkKopyala] = useState(Language["/"].Button.Final.Before.Copy)
    const [yazilar, setYazilar] = useState({baslik:Language["/"].Button.Final.Before.Header, link:Language["/"].Button.Final.Before.LinkReady,
     cevap: Language["/"].Button.Final.Before.Button});
    const [hatimKonu, setHatimKonu] = useState("");
    const [hideMevcutHatimler, setHideMevcutHatimler] = useState(false);
    const [mevcutHatimler, setMevcutHatimler] = useState([]);
    const [mevcutHatimlerBaslik, setMevcutHatimlerBaslik] = useState([]);


    // const [scrollNav, setScrollNav] = useState(false);
    // const [width, setWidth] = useState(window.innerWidth);

    // const changeNav = () => {
    //     if(window.scrollY >= 80){
    //         setScrollNav(true);
    //     }else{
    //         setScrollNav(false);
    //     }
    // }

    // const handleWindowSizeChange = () => {
    //     setWidth(window.innerWidth);
    // }

    useEffect(async () => {
        // window.addEventListener('scroll', changeNav)
        // window.addEventListener('resize', handleWindowSizeChange);
        // console.log(isMobile)

        let localStorageCuzKeylerArr = JSON.parse(localStorage.getItem("CuzKeyler"));
        if(localStorageCuzKeylerArr == null) return;
        setHideMevcutHatimler(!hideMevcutHatimler);
        setMevcutHatimler(localStorageCuzKeylerArr)

        let localStorageCuzKeylerBaslikArr = JSON.parse(localStorage.getItem("CuzKeylerBaslik"));
        if(localStorageCuzKeylerBaslikArr == null) return;
        setMevcutHatimlerBaslik(localStorageCuzKeylerBaslikArr)


        return () => {
            // window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

// let isMobile = (width <= 768);

    return (
        <>
        <QuestionContainer >
            <DialogBox visibility={hideDialogBox} height={"290px"} top={"10%"}>

            <DialogIcon src={close} iconSize={"30px"} alignEnd={true} onClick={
                ()=>{
                    setYazilar({baslik:Language["/"].Button.Final.Before.Header, link:Language["/"].Button.Final.Before.LinkReady, cevap: Language["/"].Button.Final.Before.Button});
                    setHideDialogBox(!hideDialogBox);
                }
            } />

                <DialogText fontSize={"20px"}>
                    {yazilar.baslik}
                </DialogText>

                <DialogContainer>
                <DialogText fontSize={"15px"}>
                    {Language["/"].Button.Final.Before.Link}
                </DialogText>

                {<div style={{height:'10px'}}></div>}

                <DialogLink fontSize={"11px"}>
                    {yazilar.link}
                </DialogLink>

                {<div style={{height:'10px'}}></div>}

                <DialogText fontSize={"15px"}>
                    {linkKopyala}
                </DialogText>


                <DialogIcon src={copy} iconSize={"30px"} onClick={()=>{
                   var text = "https://hatim-dagit.web.app/cuz/" + hatimKey;
                   navigator.clipboard.writeText(text).then(function() {
                        setLinkKopyala(Language["/"].Button.Final.After.Copy)
                   }, function(err) {
                   
                });
                }}>

                </DialogIcon>
                </DialogContainer>

            <NavBtnLink to={"/cuz/" + hatimKey}>{yazilar.cevap}</NavBtnLink>

            </DialogBox>
            
            <AskDialog firebase={firebase} setHatimKey={setHatimKey} setYazilar={setYazilar}
                                 propHideDialogBox={{hideDialogBox, setHideDialogBox}}
                                askDialogBox={askDialogBox} setAskDialogBox={setAskDialogBox}
                                hatimKonu={hatimKonu} setHatimKonu={setHatimKonu}/>

        {/* <BackContainer>
                <BackButtonIcon hide={datas == 1 ? false : true} src={backButton} onClick={()=>{setDatas(routes.pop()); console.log(routes); setRoutes(routes);}}>

                </BackButtonIcon>
            </BackContainer> */}
            <QuestionInnerContainer>
                <QuestionItem>
                {Language["/"].Question}
                </QuestionItem>
            </QuestionInnerContainer>

            <RespondContainer>
                           <RespondInnerContainer hatimExists={hideMevcutHatimler}>
                                    <ResponseItem  onClick={ ()=>{
                                        setAskDialogBox(true)
                                        
                                    }}>
                                        <ResponseText>
                                        {Language["/"].Button.Main}
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer>

            {
            hideMevcutHatimler 
                    ? 
                    <>
            <MevcutHatimTitle>{Language["/"].MevcutHatimler}</MevcutHatimTitle>

            
            <MevcutHatimListe>
                    {  
                    mevcutHatimler.map((item, index)=>{
                        return <MevcutHatimListeEleman><MevcutHatimListeElemanLink href={"/cuz/" + item}>{mevcutHatimlerBaslik[index]}</MevcutHatimListeElemanLink></MevcutHatimListeEleman>
                     })
                 }
            </MevcutHatimListe>
                
                    </>
                    :
                    <></>
}
           
        </QuestionContainer>
        </>
    )
};

export default Constr
