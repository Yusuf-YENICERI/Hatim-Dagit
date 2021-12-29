//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {QuestionContainer, QuestionInnerContainer, QuestionItem, RespondContainer, RespondInnerContainer, ResponseItem
, ResponseLogo, ResponseText, BackButtonIcon, BackContainer, RespondOuterContainer,
DialogBox, DialogText, DialogLink, DialogIcon, DialogContainer, DialogInputBox, NavBtnLink,
LoadingContainer, LoadingItem,
CopyContainer, CopyItem, CopyIcon,
ShareContainer, ShareItem, ShareIcon
} from './QuestionElements';
import LanguageData from '../../strings';
import {dataFormat} from '../../strings/dataFormat';
import { removeAll } from "../../common";
import { FaGithub } from "react-icons/fa";
import backButton from '../../icons/button.svg';
import copy from '../../icons/copy.svg';
import share from '../../icons/share.svg';
import close from '../../icons/close.svg';
import {FirebaseContext} from '../Firebase';
import ShareBox from '../ShareBox';


// let counter = 0;+0
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
    const [takePart, setTakePart] = useState(LanguageData["/cuz"].Button.Take);
    const [partIptal, setPartIptal] = useState(false);
    const [hideShareBox, setHideShareBox] = useState(false);

    const changeShareBoxVisibility = () => {
        setHideShareBox(!hideShareBox)
    }

    useEffect(async () => {
        try {
            let result = await firebase.hatimGetir();
            while(result == "error"){
                result = await firebase.hatimGetir();
            }    
            setLanguage(result);
            setHideRespond(true);
            setLoadingVisibility(false);
            if(localStorage.getItem("cuz") == null){
                localStorage.setItem("cuz", JSON.stringify([]));
            }
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

        <ShareContainer onClick={()=>{
                    changeShareBoxVisibility();
                }}>
            <ShareIcon src={share} iconSize={"30px"} ></ShareIcon>
            <ShareItem>{LanguageData['/cuz'].After.Share}</ShareItem>
        </ShareContainer>

        <CopyContainer onClick={()=>{
                   var text = window.location;
                   navigator.clipboard.writeText(text).then(function() {
                        setLinkCopiedText(LanguageData["/cuz"].After.Copy.After)
                   }, function(err) {});
                }}>
            <CopyIcon src={copy} iconSize={"30px"} ></CopyIcon>
            <CopyItem>{linkCopiedText}</CopyItem>
        </CopyContainer>

        <DialogBox visibility={hideDialogBox}>

                <DialogIcon id={"closeTakePart"} src={close} iconSize={"20px"} alignEnd={true} onClick={
                        ()=>{
                            setHideDialogBox(!hideDialogBox);
                        }
                    } />

                <DialogText fontSize={"20px"}>
                    {hatimNo}. {LanguageData["/cuz"].Button.Question}
                </DialogText>

                
                <DialogInputBox value={username} onChange = {(event)=>{
                    setUsername(event.target.value);
                }}>
                </DialogInputBox>

                <NavBtnLink id={"takeButton"} onClick={async ()=>{
                    setHideDialogBox(!hideDialogBox);
                    if(partIptal)
                    {
                        await firebase.cuzIptal(hatimNo);
                        let localStorageCuzArr = JSON.parse(localStorage.getItem("cuz"));
                        localStorageCuzArr =  removeAll(localStorageCuzArr, hatimNo);
                        localStorage.setItem("cuz", JSON.stringify( localStorageCuzArr ));
                        setLanguage(await firebase.hatimGetir());
                        setTakePart(LanguageData["/cuz"].Button.Take)
                        setPartIptal(false);
                        return;
                    }
                    await firebase.cuzAlindi(username, hatimNo);
                    let localStorageCuzArr = JSON.parse(localStorage.getItem("cuz"));
                    localStorageCuzArr.push(hatimNo);
                    localStorage.setItem("cuz",JSON.stringify(localStorageCuzArr));
                    setLanguage(await firebase.hatimGetir());
                }}>
                    {takePart}
                </NavBtnLink>

                

            </DialogBox>

            <ShareBox shareBoxVisibility={hideShareBox} changeShareBoxVisibility={changeShareBoxVisibility} />

        {/* <BackContainer>
                <BackButtonIcon hide={datas == 1 ? false : true} src={backButton} onClick={()=>{setDatas(routes.pop()); console.log(routes); setRoutes(routes);}}>

                </BackButtonIcon>
            </BackContainer> */}
            <QuestionInnerContainer>
                <QuestionItem fontSize={"1.6rem"}>
                        {Language.baslik}
                </QuestionItem>


              { Language.bitisTarihi != null && Language.bitisTarihi.length > 0 &&  <QuestionItem fontSize={"1.1rem"}>
                       {LanguageData["/cuz"].KhatmFinishDate[0]}  {Language.bitisTarihi.split("-").reverse().join("/")} {LanguageData["/cuz"].KhatmFinishDate[1]}
                </QuestionItem>
                }
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
                                if (alindi) {
                                    if(!JSON.parse(localStorage.getItem("cuz")).includes(cevap)){
                                        return;
                                    }else{
                                        setTakePart(LanguageData["/cuz"].Button.TakeCancel)
                                        setPartIptal(true);
                                        //unnecessary, please fix it
                                        setHatimNo(cevap);
                                        setUsername(isim);
                                        setHideDialogBox(true);
                                        return;
                                    }
                                }
                                

                                setHatimNo(cevap);
                                setHideDialogBox(true);
                                setUsername('');
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
                                if (alindi) {
                                    if(!JSON.parse(localStorage.getItem("cuz")).includes(cevap)){
                                        return;
                                    }else{
                                        setTakePart(LanguageData["/cuz"].Button.TakeCancel)
                                        setPartIptal(true);
                                        //unnecessary, please fix it
                                        setHatimNo(cevap);
                                        setUsername(isim);
                                        setHideDialogBox(true);
                                        return;
                                    }
                                }
                                

                                setHatimNo(cevap);
                                setHideDialogBox(true);
                                setUsername('');
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
                                if (alindi) {
                                    if(!JSON.parse(localStorage.getItem("cuz")).includes(cevap)){
                                        return;
                                    }else{
                                        setTakePart(LanguageData["/cuz"].Button.TakeCancel)
                                        setPartIptal(true);
                                        //unnecessary, please fix it
                                        setHatimNo(cevap);
                                        setUsername(isim);
                                        setHideDialogBox(true);
                                        return;
                                    }
                                }
                                

                                setHatimNo(cevap);
                                setHideDialogBox(true);
                                setUsername('');
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
