//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {QuestionContainer, QuestionInnerContainer, QuestionItem, RespondContainer, RespondInnerContainer, ResponseItem
, ResponseText, BackContainer, DialogBox, DialogText, DialogLink, DialogIcon, DialogContainer, DialogInputBox,
MevcutHatimTitle, MevcutHatimListeContainer, MevcutHatimListe, MevcutHatimListeEleman, MevcutHatimListeElemanLink,
    MevcutHatimButtonContainer, MevcutHatimButtonInnerContainer, MevcutHatimButtonItem, MevcutHatimButtonText, CloseIcon, DialogTextSpan, NewFeatureTag, DialogTextArea, MevcutHatimButtonItemLink} from './styles';
import Language from '../../../strings/index';
import { FaGithub } from "react-icons/fa";
import backButton from '../../../icons/button.svg';
import Database, {DatabaseContext} from '../../../backend';
import copy from '../../../icons/copy.svg';
import close from '../../../icons/close.svg';
import { NavBtnLink } from '../../common/Navbar/NavbarElements';
import AskDialog from '../AskDialog';
import Months3Dialog from '../Months3Dialog';

const Constr = ({toggle}: {toggle: ()=>{}}) => {
    return <DatabaseContext.Consumer>
                    {
                        firebase => {

                        return <Question toggle={toggle} firebase={firebase}></Question>

                    }
                }
            </DatabaseContext.Consumer>
}

const Question = ({ firebase, toggle } : {toggle: ()=>{}, firebase: any}) => {

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
    const [hatimCount, setHatimCount] = useState(1)
    const [months3DialogVisible, setMonths3DialogVisible] = useState(false)
    
    const changeAskDialogBox = () => {
        setAskDialogBox(!askDialogBox)
    }

    useEffect(() => {
        let localStorageCuzKeylerArr = JSON.parse(localStorage.getItem("CuzKeyler") ?? "{}");
        if(localStorageCuzKeylerArr == null || localStorageCuzKeylerArr.length == 0) return;
        setHideMevcutHatimler(!hideMevcutHatimler);
        setMevcutHatimler(localStorageCuzKeylerArr)

        let localStorageCuzKeylerBaslikArr = JSON.parse(localStorage.getItem("CuzKeylerBaslik") ?? "{}");
        if(localStorageCuzKeylerBaslikArr == null || localStorageCuzKeylerBaslikArr.length == 0) return;
        setMevcutHatimlerBaslik(localStorageCuzKeylerBaslikArr)
    }, []);


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

            <NavBtnLink to={yazilar.link.replace("https://hatimdagit.com", "")}>{yazilar.cevap}</NavBtnLink>

            </DialogBox>
            
            <AskDialog firebase={firebase} setHatimKey={setHatimKey} setYazilar={setYazilar}
                                 propHideDialogBox={{hideDialogBox, setHideDialogBox}}
                                askDialogBox={askDialogBox} setAskDialogBox={setAskDialogBox}
                                hatimKonu={hatimKonu} setHatimKonu={setHatimKonu} changeAskDialogBox={changeAskDialogBox}
                                hatimBitisTarihi={hatimBitisTarihi} setHatimBitisTarihi={setHatimBitisTarihi} 
                                isRamazan={ramazan} setHatimDescription={setHatimDescription} hatimDescription={hatimDescription}
                                hatimCount={hatimCount} setHatimCount={setHatimCount} />

            <Months3Dialog months3DialogVisible={months3DialogVisible} setMonths3DialogVisible={setMonths3DialogVisible}
                            setHatimKey={setHatimKey} setYazilar={setYazilar} setHideDialogBox={setHideDialogBox} />



          

            <QuestionInnerContainer>
                <QuestionItem>
                {Language["/"].MyInfos}
                </QuestionItem>
            </QuestionInnerContainer>

            <RespondContainer>  
                           <RespondInnerContainer hatimExists={hideMevcutHatimler}>
                                    <ResponseItem onClick={ ()=>{
                                        window.location.href = "/cizelgelerim"
                                        
                                    }}>
                                        <ResponseText>
                                        {Language["/"].Button.MyInfos?.Charts}
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer>



            

            {
            hideMevcutHatimler && mevcutHatimler.length > 0
                    ? 
                    <>
            <MevcutHatimButtonContainer style={{marginTop: '20px'}}>
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

                                        let localStorageCuzKeylerArr = JSON.parse(localStorage.getItem("CuzKeyler") ?? "{}");
                                        if(localStorageCuzKeylerArr == null) {
                                            alert('Hata var!');
                                            return;
                                        }
                                        localStorageCuzKeylerArr.splice(index, 1);
                                        localStorage.setItem("CuzKeyler", JSON.stringify(localStorageCuzKeylerArr))

                                        let localStorageCuzKeylerArrBaslik = JSON.parse(localStorage.getItem("CuzKeylerBaslik") ?? "{}");
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
