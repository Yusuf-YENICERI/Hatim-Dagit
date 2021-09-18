//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {QuestionContainer, QuestionInnerContainer, QuestionItem, RespondContainer, RespondInnerContainer, ResponseItem
, ResponseLogo, ResponseText, BackButtonIcon, BackContainer, RespondOuterContainer,
DialogBox, DialogText, DialogLink, DialogIcon, DialogContainer, DialogInputBox, NavBtnLink,
LoadingContainer, LoadingItem,
CopyContainer, CopyItem, CopyIcon
} from './QuestionElements';
import LanguageData from '../../strings';
import {dataFormat} from '../../strings/dataFormat';

import { FaGithub } from "react-icons/fa";
import backButton from '../../icons/button.svg';
import copy from '../../icons/copy.svg';
import close from '../../icons/close.svg';
import {FirebaseContext} from '../Firebase';



// let counter = 0;
// let total = Language[18].cevaplar.length;


const Question = () => {
    return <FirebaseContext.Consumer>
        {
            frbs => {
                return <Constr  firebase={frbs}/>
            }
        }
    </FirebaseContext.Consumer>
}

const Constr = ({ toggle, firebase }) => {

    const [datas, setDatas] = useState(18);
    const [routes, setRoutes] = useState([]);
    const [hatimKey, setHatimKey] = useState("");
    const [hideDialogBox, setHideDialogBox] = useState(false);
    const [linkKopyala, setLinkKopyala] = useState(LanguageData["/cuz"].After.Copy.Before)
    const [username, setUsername] = useState("");
    const [hatimNo, setHatimNo] = useState("");
    const [Language, setLanguage] = useState(dataFormat);
    const [hideRespond, setHideRespond] = useState(false);
    const [loadingVisibility, setLoadingVisibility] = useState(true);
    const [linkCopiedText, setLinkCopiedText] = useState(LanguageData["/cuz"].After.Copy.Before);
    const [waitText, setWaitText] = useState(LanguageData["/cuz"].Before.Wait);

    useEffect(async () => {
        try {
            let result = await firebase.hatimGetir();
            while(result == "error"){
                result = await firebase.hatimGetir();
            }    
            setLanguage(result);
            // setHideRespond(true);
            // setLoadingVisibility(false);
        } catch (error) {
            setWaitText(LanguageData["/cuz"].Before.Error)
            return;
        }
      }, []);
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

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    //     window.addEventListener('resize', handleWindowSizeChange);
    //     console.log(isMobile)

    //     return () => {
    //         window.removeEventListener('resize', handleWindowSizeChange);
    //     }
    // }, []);

// let isMobile = (width <= 768);

    return (
        <>
        <QuestionContainer >

        <LoadingContainer visibility={loadingVisibility}>
    <LoadingItem >{waitText}</LoadingItem>
        </LoadingContainer>

        <CopyContainer onClick={()=>{
                   var text = window.location;
                   navigator.clipboard.writeText(text).then(function() {
                        setLinkCopiedText(LanguageData["/cuz"].After.Copy.After)
                   }, function(err) {
                   
                });
                }}>
            
            <CopyIcon src={copy} iconSize={"30px"} ></CopyIcon>
            <CopyItem>{linkCopiedText}</CopyItem>
        </CopyContainer>

        <DialogBox visibility={hideDialogBox}>

        <DialogIcon src={close} iconSize={"20px"} alignEnd={true} onClick={
                ()=>{
                    setHideDialogBox(!hideDialogBox);
                }
            } />

                <DialogText fontSize={"20px"}>
    {hatimNo}. {LanguageData["/cuz"].Button.Question}
                </DialogText>

                
                <DialogInputBox onChange = {(event)=>{
                    setUsername(event.target.value);
                }}>
                </DialogInputBox>

                <NavBtnLink onClick={async ()=>{
                    // firebase
                    setHideDialogBox(!hideDialogBox);
                    await firebase.cuzAlindi(username, hatimNo);
                    setLanguage(await firebase.hatimGetir());
                }}>
                    {LanguageData["/cuz"].Button.Take}
                </NavBtnLink>

                

            </DialogBox>

        {/* <BackContainer>
                <BackButtonIcon hide={datas == 1 ? false : true} src={backButton} onClick={()=>{setDatas(routes.pop()); console.log(routes); setRoutes(routes);}}>

                </BackButtonIcon>
            </BackContainer> */}
            <QuestionInnerContainer>
                <QuestionItem fontSize={"1.6rem"}>
                        {Language.baslik}
                </QuestionItem>
                <QuestionItem fontSize={"1.3rem"}>
                        {LanguageData["/cuz"].Before.Question}
                </QuestionItem>
            </QuestionInnerContainer>

           
            <RespondContainer visibility={hideRespond}>
               <RespondOuterContainer>
               <RespondInnerContainer>
                    {
                        Language[1].cevaplar.map(({cevap, alindi, isim}) => (
                            
                            <ResponseItem bgColor={alindi} onClick={()=>{
                                if (alindi) return;
                                

                                setHatimNo(cevap);
                                setHideDialogBox(true);
                            }}>
                                <ResponseLogo />
                                <ResponseText bgColor={alindi}>
                                    {cevap}
                                </ResponseText>
                                <ResponseText color={"#FFBF17"} bgColor={alindi}>
                                    {isim}
                                </ResponseText>
                            </ResponseItem>
                        ))
                    }
                    {
                        Language[2].cevaplar.map(({cevap, alindi, isim}) => (
                            
                            <ResponseItem bgColor={alindi} onClick={()=>{
                                if (alindi) return;
                                

                                setHatimNo(cevap);
                                setHideDialogBox(true);
                            }}>
                                <ResponseLogo />
                                <ResponseText bgColor={alindi}>
                                    {cevap}
                                </ResponseText>
                                <ResponseText color={"#FFBF17"} bgColor={alindi}>
                                    {isim}
                                </ResponseText>
                            </ResponseItem>
                        ))
                    }
                     {
                        Language[3].cevaplar.map(({cevap, alindi, isim}) => (
                            
                            <ResponseItem bgColor={alindi} onClick={()=>{
                                if (alindi) return;
                                

                                setHatimNo(cevap);
                                setHideDialogBox(true);
                            }}>
                                <ResponseLogo />
                                <ResponseText bgColor={alindi}>
                                    {cevap}
                                </ResponseText>
                                <ResponseText color={"#FFBF17"} bgColor={alindi}>
                                    {isim}
                                </ResponseText>
                            </ResponseItem>
                        ))
                    }
                </RespondInnerContainer>

               

                </RespondOuterContainer>
            </RespondContainer>
           
        </QuestionContainer>
        </>
    )
};

export default Question
