//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {QuestionContainer, QuestionInnerContainer, QuestionItem, RespondContainer, RespondInnerContainer, ResponseItem
, ResponseLogo, ResponseText, BackButtonIcon, BackContainer, DialogBox, DialogText, DialogLink, DialogIcon, DialogContainer, DialogInputBox,
MevcutHatimTitle, MevcutHatimListeContainer, MevcutHatimListe, MevcutHatimListeEleman, MevcutHatimListeElemanLink,
    MevcutHatimButtonContainer, MevcutHatimButtonInnerContainer, MevcutHatimButtonItem, MevcutHatimButtonLogo, MevcutHatimButtonText, CloseIcon, DialogTextSpan, NewFeatureTag, DialogTextArea} from './QuestionElements';
import Language from '../../../strings/index';
import { FaGithub } from "react-icons/fa";
import backButton from '../../../icons/button.svg';
import Database, {DatabaseContext} from '../../../backend';
import copy from '../../../icons/copy.svg';
import close from '../../../icons/close.svg';
import { NavBtnLink } from '../../common/Navbar/NavbarElements';

const AskDialog = ({ firebase, setHatimKey, setYazilar, propHideDialogBox, askDialogBox, setAskDialogBox, hatimKonu, setHatimKonu, hatimBitisTarihi, setHatimBitisTarihi, changeAskDialogBox,
                    isRamazan, setHatimDescription, hatimDescription }) => {
    return (
    <DialogBox visibility={askDialogBox} height={"380px"} top={"10%"}>

                <DialogContainer>

                <DialogIcon src={close} iconSize={"30px"} alignEnd={true} onClick={
                ()=>{
                   changeAskDialogBox();
                }
            } />

                <DialogText fontSize={"20px"}>
                {Language["/"].Button.Header.Text}
                </DialogText>

                <div style={{height:'30px'}}></div>
                
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[0]}</DialogTextSpan>
                    <DialogInputBox placeholder={Language["/"].Button.Header.Input[0]} onChange = {(event)=>{
                        setHatimKonu(event.target.value);
                        
                    }}/>
                </div>

                <div style={{height:'10px'}}></div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[1]}</DialogTextSpan>
                    <DialogTextArea rows="2" type="" placeholder={Language["/"].Button.Header.Input[1]} onChange = {(event)=>{
                        setHatimDescription(event.target.value);
                        
                    }}/>
                </div>

                <div style={{height:'10px'}}></div>


                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[2]}</DialogTextSpan>
                    <DialogInputBox type="date"  onChange = {(event)=>{
                        setHatimBitisTarihi(event.target.value);
                    }}/>
                </div>

                {<div style={{height:'10px'}}></div>}

             
                </DialogContainer>

            <NavBtnLink onClick={async ()=>{
                setAskDialogBox(false);
                propHideDialogBox.setHideDialogBox(true);
                let _hatimKey = await firebase.yeniHatim(hatimKonu, hatimBitisTarihi, false, isRamazan, hatimDescription);
                setHatimKey(_hatimKey);
                const route = isRamazan ? "ramazan" : "cuz";
                setYazilar({
                    baslik:Language["/"].Button.Final.After.Header,
                    link: `https://hatimdagit.com/${route}/` + _hatimKey,
                    cevap:Language["/"].Button.Final.After.Button
                })
            }}>{Language["/"].Button.Header.Button}</NavBtnLink>

            </DialogBox>
    );
}

const Constr = ({toggle}) => {
    return <DatabaseContext.Consumer>
                    {
                        firebase => {

                        return <Question toggle={toggle} firebase={firebase}></Question>

                    }
                }
            </DatabaseContext.Consumer>
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
    const [hatimBitisTarihi, setHatimBitisTarihi] = useState("");
    const [hideMevcutHatimler, setHideMevcutHatimler] = useState(false);
    const [mevcutHatimler, setMevcutHatimler] = useState([]);
    const [mevcutHatimlerBaslik, setMevcutHatimlerBaslik] = useState([]);
    const [mevcutHatimlerVisible, setMevcutHatimlerVisible] = useState(false);
    const [ramazan, setRamazan] = useState(false)
    const [hatimDescription, setHatimDescription] = useState("")

    const changeAskDialogBox = () => {
        setAskDialogBox(!askDialogBox)
    }

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
        if(localStorageCuzKeylerArr == null || localStorageCuzKeylerArr.length == 0) return;
        setHideMevcutHatimler(!hideMevcutHatimler);
        setMevcutHatimler(localStorageCuzKeylerArr)

        let localStorageCuzKeylerBaslikArr = JSON.parse(localStorage.getItem("CuzKeylerBaslik"));
        if(localStorageCuzKeylerBaslikArr == null || localStorageCuzKeylerBaslikArr.length == 0) return;
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
                   const route = ramazan ? "ramazan" : "cuz"
                   var text = `https://hatimdagit.com/${route}/` + hatimKey;
                   navigator.clipboard.writeText(text).then(function() {
                        setLinkKopyala(Language["/"].Button.Final.After.Copy)
                   }, function(err) {
                   
                });
                }}>

                </DialogIcon>
                </DialogContainer>

            <NavBtnLink to={(ramazan ? "/ramazan/" : "/cuz/") + hatimKey}>{yazilar.cevap}</NavBtnLink>

            </DialogBox>
            
            <AskDialog firebase={firebase} setHatimKey={setHatimKey} setYazilar={setYazilar}
                                 propHideDialogBox={{hideDialogBox, setHideDialogBox}}
                                askDialogBox={askDialogBox} setAskDialogBox={setAskDialogBox}
                                hatimKonu={hatimKonu} setHatimKonu={setHatimKonu} changeAskDialogBox={changeAskDialogBox}
                                hatimBitisTarihi={hatimBitisTarihi} setHatimBitisTarihi={setHatimBitisTarihi} 
                                isRamazan={ramazan} setHatimDescription={setHatimDescription} hatimDescription={hatimDescription}/>

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
                                    <ResponseItem id={"newKhatm"} onClick={ ()=>{
                                        setRamazan(false);
                                        setAskDialogBox(true)
                                        
                                    }}>
                                        <ResponseText>
                                        {Language["/"].Button.Main}
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer>

            <RespondContainer style={{marginTop: '20px'}}>
                           <RespondInnerContainer hatimExists={hideMevcutHatimler}>
                           

                                    <ResponseItem id={"newDonerliRamazanKhatm"} onClick={ ()=>{
                                        setRamazan(true);
                                        setAskDialogBox(true)
                                        
                                    }}>
                                         <NewFeatureTag>Yeni</NewFeatureTag>
                                        <ResponseText>
                                        {Language["/"].Button.Ramazan}
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer>

            

            {
            hideMevcutHatimler 
                    ? 
                    <>
            <MevcutHatimButtonContainer style={{marginTop: '60px'}}>
                           <MevcutHatimButtonInnerContainer hatimExists={hideMevcutHatimler}>
                                    <MevcutHatimButtonItem id={"newKhatm"} onClick={ ()=>{
                                        setMevcutHatimlerVisible(!mevcutHatimlerVisible);
                                        
                                    }}>
                                        <MevcutHatimButtonText>
                                        {Language["/"].ExistingKhatms}
                                        </MevcutHatimButtonText>
                                    </MevcutHatimButtonItem>

                <MevcutHatimListe mevcutHatimlerVisible={mevcutHatimlerVisible} mevcutHatimlerSayisi={mevcutHatimler.length}>
                        {  
                        mevcutHatimler.map((item, index)=>{
                            return <MevcutHatimListeEleman><MevcutHatimListeElemanLink href={"/cuz/" + item}>{mevcutHatimlerBaslik[index]}</MevcutHatimListeElemanLink><CloseIcon onClick={()=>{

                                        let localStorageCuzKeylerArr = JSON.parse(localStorage.getItem("CuzKeyler"));
                                        if(localStorageCuzKeylerArr == null) {
                                            alert('Hata var!');
                                            return;
                                        }
                                        localStorageCuzKeylerArr.splice(index, 1);
                                        localStorage.setItem("CuzKeyler", JSON.stringify(localStorageCuzKeylerArr))

                                        let localStorageCuzKeylerArrBaslik = JSON.parse(localStorage.getItem("CuzKeylerBaslik"));
                                        localStorageCuzKeylerArrBaslik.splice(index, 1)
                                        localStorage.setItem("CuzKeylerBaslik", JSON.stringify(localStorageCuzKeylerArrBaslik))
                                        
                                        setMevcutHatimler(localStorageCuzKeylerArr);
                                        setMevcutHatimlerBaslik(localStorageCuzKeylerArrBaslik);
                            }} /></MevcutHatimListeEleman>
                        })
                    }
                </MevcutHatimListe>
                            </MevcutHatimButtonInnerContainer>
            </MevcutHatimButtonContainer>
                
            {/* <MevcutHatimTitle>{Language["/"].MevcutHatimler}</MevcutHatimTitle> */}

            
                
                    </>
                    :
                    <></>
}
           
        </QuestionContainer>
        </>
    )
};

export default Constr
