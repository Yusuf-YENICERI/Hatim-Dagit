//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {FaBars} from 'react-icons/fa'
import {QuestionContainer, QuestionInnerContainer, QuestionItem, RespondContainer, RespondInnerContainer, ResponseItem
, ResponseLogo, ResponseText, BackButtonIcon, BackContainer, RespondOuterContainer,
DialogBox, DialogText, DialogLink, DialogIcon, DialogContainer, DialogInputBox, NavBtnLink,
LoadingContainer, LoadingItem,
CopyContainer, CopyItem, CopyIcon,
ShareContainer, ShareItem, ShareIcon,
YeniHatimWrapper, YeniHatimContainer, YeniHatimButton, YeniHatimIcon, YeniHatimText,
HideHatimIcon, ShowHatimIcon, HatimContainer, HatimIconContainer, HatimIconText, CuzlerDescription, CuzlerFinishDate
} from './QuestionElements';
import AskDialog from "../AskDialog";
import LanguageData from '../../strings';
import {dataFormat} from '../../strings/dataFormat';
import { removeAll, objectToArray, removeAll_v1 } from "../../common";
import { FaGithub } from "react-icons/fa";
import backButton from '../../icons/button.svg';
import copy from '../../icons/copy.svg';
import share from '../../icons/share.svg';
import close from '../../icons/close.svg';
import {FirebaseContext} from '../Firebase';
import ShareBox from '../ShareBox';
import { extractKey, initializeLocalStorage } from "../../common";
import { Language } from '@styled-icons/ionicons-outline';
import AlertDialog from '../AlertDialog';
import StatsRing from '../RingProgress';
import CuzlerHatimCard from '../CuzlerHatimCard';
import YesNoDialog from "../YesNoDialog";
import { useNotification, notificationActions } from '../../features/notification';
import { showNotification } from '@mantine/notifications';
import { editModalCuzlerActions, useEditCuzlerModal } from '../../features/editCuzlerModal';
import { Text, Modal } from '@mantine/core';
import EditModalContent from "../EditModalContent";
import { cuzlerFunctionTriggerActions, useCuzlerFunctionTrigger } from '../../features/cuzlerFunctionTrigger';
import { yesNoDialogAlertActions } from '../../features/yesNoDialogAlert';
import CuzModal from "../CuzModal";
import LocDb from "@yusuf-yeniceri/easy-storage";
import { cuzModalActions, useCuzModal } from '../../features/cuzModal';


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
    const [allLanguage, setAllLanguage] = useState([dataFormat]);
    const [hideRespond, setHideRespond] = useState(false);
    const [loadingVisibility, setLoadingVisibility] = useState(true);
    const [linkCopiedText, setLinkCopiedText] = useState(LanguageData["/cuz"].After.Copy.Before);
    const [waitText, setWaitText] = useState(LanguageData["/cuz"].Before.Wait);
    const [takePart, setTakePart] = useState(LanguageData["/cuz"].Button.Take);
    const [partIptal, setPartIptal] = useState(false);
    const [hideShareBox, setHideShareBox] = useState(false);
    const [hatimlerVisibilities, setHatimlerVisibilities] = useState([]);
    const [askDialogBox, setAskDialogBox] = useState(false);
    const [activeHatimSubKey, setActiveHatimSubKey] = useState(false);
    const [currentApi, setCurrentApi] = useState(2);
    const [initialRunDone, setInitialRunDone] = useState(false);

        /** redux */

    const dispatch = useDispatch();
    const {barVisible, text, icon} = useNotification();
    const editCuzlerModal = useEditCuzlerModal();
    const cuzModal = useCuzModal();

    /** redux end */

    {/** AskDialog */}
    const [yazilar, setYazilar] = useState({baslik:LanguageData["/"].Button.Final.Before.Header, link:LanguageData["/"].Button.Final.Before.LinkReady,
     cevap: LanguageData["/"].Button.Final.Before.Button});
    const [hideNewHatimBox, setHideNewHatimBox] = useState(false);
    const [hatimKonu, setHatimKonu] = useState("");
    const [hatimBitisTarihi, setHatimBitisTarihi] = useState("");
    const [totalPartsTaken, setTotalPartsTaken] = useState(0);

    const changeAskDialogBox = () => {
        setAskDialogBox(!askDialogBox)
    }

    {/**AskDialog End */}


    const changeShareBoxVisibility = () => {
        setHideShareBox(!hideShareBox)
    }

    /** AlertDialog */
    const [alertVisible, setAlertVisible] = useState(false)
    const toggleAlertVisibility = () => {
        setAlertVisible(!alertVisible)
    }
    /** AlertDialog End */

    /** YesNoDialog */


    const yesHandler = async () => {
        let _hatimKey = await firebase.yeniHatim(hatimKonu, hatimBitisTarihi, true);
        dispatch(yesNoDialogAlertActions.toggleVisibility())

        // setHatimlerVisibilities((async ()=>{

                    // let newArr = [...hatimlerVisibilities];
                    // let arrLength = newArr.length + 1;
                    // for (let i = 0; i < arrLength; i++) {
                    //     newArr[i] = false;
                    // }
                    // newArr[newArr.length-1] = true;
                    // return newArr;
        //         })(), async ()=>{
        //             await firebase.yeniHatim(hatimKonu, hatimBitisTarihi, true)
        //             dispatch(yesNoDialogAlertActions.toggleVisibility())
        //         });

        // if(hatimlerVisibilities.length > 0) temp[0] = true;


        // setHatimlerVisibilities(temp);
        // await initialRun();
    }

    const noHandler = () =>  dispatch(yesNoDialogAlertActions.toggleVisibility())
    ;

    const [yesHandlerState, setYesHandlerState] = useState(()=> yesHandler)
    const [noHandlerState, setNoHandlerState] = useState(()=>noHandler)

    const toggleYesHandlerState = (payload) => {
        setYesHandlerState(()=>payload)
    }

    const toggleNoHandlerState = (payload) => {
        setNoHandlerState(()=>payload)
    }


    /** YesNoDialog End */




    const initialRun = async () => {
        try {
            let result = await firebase.hatimGetir();
            while(result == "error"){
                result = await firebase.hatimGetir();
            } 

            let allHatimler;
            let _currentApi = 2;
            if(!Array.isArray(result)){
                allHatimler = objectToArray(result);
                if(allHatimler[0].isRamazan){
                    window.location = `/ramazan/${extractKey()}`
                }
            }
            else{
                allHatimler = result;
                allHatimler[0].subKey = extractKey();
                setCurrentApi(1);
                _currentApi = 1;
            }

            let currentIndex = 0;
            for (let i = 0; i < allHatimler.length; i++) {

                let totalCevap = allHatimler[i][1].cevaplar.filter((cevap)=>cevap.alindi).length +
                allHatimler[i][2].cevaplar.filter((cevap)=>cevap.alindi).length +
                allHatimler[i][3].cevaplar.filter((cevap)=>cevap.alindi).length;

                if(totalCevap != 30){
                    currentIndex = i;
                    break;
                }
            }
            setTotalPartsTaken(firebase.countNumberOfCuzs(allHatimler))
            setAllLanguage(allHatimler);
            setHideRespond(true);
            setLoadingVisibility(false);
            setHatimlerVisibilities((()=>{
                let newArr = [];
                for (let i = 0; i < objectToArray(result).length; i++) {
                    newArr[i] = false;
                }
                newArr[currentIndex] = true;
                return newArr;
            })());

            let cuzStorage = JSON.parse(localStorage.getItem("cuz"));

            if(cuzStorage == null){
                switch (_currentApi) {
                    case 2:
                        initializeLocalStorage("cuz");
                        break;
                    case 1:
                        initializeLocalStorage("cuz_v1");
                        break;
                }
            };
            if(Array.isArray(cuzStorage)) initializeLocalStorage("cuz_v1");

        } catch (error) {
            console.log(`Cuzler\\index.js: ${error}`);
            setWaitText(LanguageData["/cuz"].Before.Error)
            return;
        }
    }

    const afterRun = async () => {
        try {
            let firebaseListener = firebase.db.ref(`hatim/${firebase.extractKey()}`).on('value', snapshot => {


                let data = snapshot.val();

                if(data.delete != undefined){
                    setLoadingVisibility(true)
                    setWaitText(LanguageData["/cuz"].Before.Deleted)
                    return;
                }

                if(data.baslik != null){
                    data = [data];
                }

                let result = data;
                
                setAllLanguage(objectToArray(result));
                setHideRespond(true);
                setLoadingVisibility(false);
                
                // let hatimContainers = document.getElementsByClassName("hatimContainer");
                // let index = 0;
                // for (const element of hatimContainers) {
                //     element.addEventListener("transitionend", () => {
                //         if(!hatimlerVisibilities[index])
                //             element.style.display = "inline-block";
                //         else
                //             element.style.display = "none";
                //     }, false);
                //     index++;
                // }

            });

        } catch (error) {
            setWaitText(LanguageData["/cuz"].Before.Error)
            return;
        }
    }

    const cuzlerFunctionTrigger = useCuzlerFunctionTrigger();
    let firebaseListener = null;

    useEffect(async () => {
        if(!initialRunDone){
            await initialRun();
            setInitialRunDone(true);
        }
        firebaseListener = await afterRun();
        if(cuzlerFunctionTrigger.visible){
            // await afterRun();
            dispatch(cuzlerFunctionTriggerActions.toggleVisibility())
        }
      }, [cuzlerFunctionTrigger.visible]);

    return (
        <>
        <QuestionContainer id="questionContainer" minHeight={(window.innerHeight-80).toString() + "px"} hatimlerVisibility={hatimlerVisibilities[0]} >

        <Modal
        styles={{
            root: {height: '100%'},
            inner: {height: '100%'},
            body: {height: '100%'},

        }}
        opened={editCuzlerModal.visible}
        onClose={() => dispatch(editModalCuzlerActions.toggleVisibility())}
        title={LanguageData["/cuz"].CuzlerHatimCard.Modal.Title}
        >
            <EditModalContent subKey={allLanguage[0].subKey}></EditModalContent>
        </Modal>

        <Modal
        styles={{
            root: {height: '100%'},
            inner: {height: '100%'},
            body: {height: '100%'},

        }}
        opened={cuzModal.visible}
        onClose={() => dispatch(cuzModalActions.toggleVisibility())}
        title={LanguageData["/cuz"].CuzlerHatimCard.PartModal.Title}
        >
            <CuzModal />
        </Modal>

        <YesNoDialog yesHandler={yesHandlerState} noHandler={noHandlerState} hatimlerVisibilities={hatimlerVisibilities} toggleHatimlerVisibilities={(newState)=>{
            setHatimlerVisibilities(newState)
        }} />

        <AlertDialog text={LanguageData["/cuz"].AlertDialog.Title} textButton={LanguageData["/cuz"].AlertDialog.Button}
         alertVisible={alertVisible} toggleAlertVisibility={toggleAlertVisibility}>
        </AlertDialog>

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
                        await firebase.cuzIptal(hatimNo, activeHatimSubKey);

                        switch (currentApi) {
                            case 2:
                                if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                localStorageCuzObj[activeHatimSubKey] = localStorageCuzObj[activeHatimSubKey] || [];
                                localStorageCuzObj =  removeAll(localStorageCuzObj, hatimNo, activeHatimSubKey);
                                localStorage.setItem("cuz", JSON.stringify( localStorageCuzObj ));
                                break;
                            case 1:
                                let localStorageCuzArr = JSON.parse(localStorage.getItem("cuz_v1"));
                                localStorageCuzArr =  removeAll_v1(localStorageCuzArr, hatimNo);
                                localStorage.setItem("cuz_v1", JSON.stringify( localStorageCuzArr ));
                            default:
                                break;
                        }

                        let tempAllLanguages = objectToArray(await firebase.hatimGetir());
                        setAllLanguage(tempAllLanguages);
                        setTotalPartsTaken(firebase.countNumberOfCuzs(tempAllLanguages))
                        setTakePart(LanguageData["/cuz"].Button.Take)
                        setPartIptal(false);
                        return;
                    }
                    let result = await firebase.cuzAlindi(username, hatimNo, activeHatimSubKey);
                    if(result == -1){
                        toggleAlertVisibility();
                    }else{
                        switch (currentApi) {
                            case 2:
                                if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                if(localStorageCuzObj[activeHatimSubKey] == null)
                                    localStorageCuzObj[activeHatimSubKey] = [];
                                localStorageCuzObj[activeHatimSubKey].push(hatimNo);
                                localStorage.setItem("cuz",JSON.stringify(localStorageCuzObj));
                                break;
                            case 1:
                                let localStorageCuzArr = JSON.parse(localStorage.getItem("cuz_v1"));
                                localStorageCuzArr.push(hatimNo);
                                localStorage.setItem("cuz_v1",JSON.stringify(localStorageCuzArr));
                            default:
                                break;
                        }
                        let tempAllLanguages = objectToArray(await firebase.hatimGetir());
                        setAllLanguage(tempAllLanguages);
                        setTotalPartsTaken(firebase.countNumberOfCuzs(tempAllLanguages))
                        return;
                    }



                    setAllLanguage(objectToArray(await firebase.hatimGetir()));
                }}>
                    {takePart}
                </NavBtnLink>



            </DialogBox>

            <ShareBox shareBoxVisibility={hideShareBox} changeShareBoxVisibility={changeShareBoxVisibility} />

            {/* <AskDialog          buttonCallback={async ()=>{
                                    let _hatimKey = await firebase.yeniHatim(hatimKonu, hatimBitisTarihi, true);

                                    let temp = [];
                                    for (let i = 0; i < hatimlerVisibilities.length; i++) {
                                        temp[i] = false;
                                    }
                                    setHatimlerVisibilities(temp);
                                    // await afterRun();
                                }}
                                buttonText={LanguageData["/"].Button.Header.Button} top={"3px"}
                                firebase={firebase} setHatimKey={setHatimKey} setYazilar={setYazilar}
                                 propHideDialogBox={{hideNewHatimBox, setHideNewHatimBox}}
                                askDialogBox={askDialogBox} setAskDialogBox={setAskDialogBox}
                                hatimKonu={hatimKonu} setHatimKonu={setHatimKonu} changeAskDialogBox={changeAskDialogBox}
                                hatimBitisTarihi={hatimBitisTarihi} setHatimBitisTarihi={setHatimBitisTarihi} /> */}


                {/* Hatimler ikonu ve yazısı */}

                 { !loadingVisibility && allLanguage.map( (Language, index) => {

                        // console.log(`message from: `);
                        // console.log(Language);


                return <>


                { (index==0) && <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    {
                        currentApi == 2 ?
                    <CuzlerHatimCard header={Language.baslik} description={Language.description}
                                    progress={totalPartsTaken/(allLanguage.length*30)*100} leftCuzs={allLanguage.length*30-totalPartsTaken}
                                    duaLeftDays={Language.bitisTarihi.split("-").reverse().join("/")}
                                    yesHandler={yesHandlerState} toggleYesHandler={toggleYesHandlerState}
                                    noHandler={noHandlerState} toggleNoHandler={toggleNoHandlerState}

                    ></CuzlerHatimCard> 
                            :
                    Language.baslik

                    }
                </div>}


                { (hatimlerVisibilities.length > 1) && <QuestionItem fontSize={"1.6rem"}>
                            {index+1}. hatim
                        {
                            hatimlerVisibilities.length > 1 ?
                                (hatimlerVisibilities[index]
                                    ?
                                <>
                                    <HatimIconContainer>
                                        <HideHatimIcon onClick={()=>{
                                                setHatimlerVisibilities(prevState=>{
                                                let _newState = [...prevState];
                                                _newState[index] = !hatimlerVisibilities[index];
                                                return _newState;
                                                });
                                            }} />
                                    </HatimIconContainer>
                                </>
                                    :
                                <>
                                    <HatimIconContainer>
                                        <ShowHatimIcon onClick={()=>setHatimlerVisibilities(prevState=>{
                                            let _newState = [...prevState];
                                            _newState[index] = !hatimlerVisibilities[index];
                                            return _newState;
                                        })} />
                                    </HatimIconContainer>
                                </>)
                            :
                                <></>
                        }
                    </QuestionItem>}

                    {/* Hatmin kendisi */}

                <HatimContainer className="hatimContainer"  visibility={hatimlerVisibilities[index]} >

                {/* <QuestionInnerContainer>


                { Language.description != null && Language.description.length > 0 && <CuzlerDescription>
                    {Language.description.split('\n').map(str => <p>{str}</p>)}
                    </CuzlerDescription>
                }

                    { Language.bitisTarihi != null && Language.bitisTarihi.length > 0 &&  <CuzlerFinishDate fontSize={"1rem"}>
                            {LanguageData["/cuz"].KhatmFinishDate[0]}  {Language.bitisTarihi.split("-").reverse().join("/")} {LanguageData["/cuz"].KhatmFinishDate[1]}
                    </CuzlerFinishDate>
                    }

                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <StatsRing data={[{label: 'Kalan cüz sayısı', stats: totalPartsTaken.toString(), progress: totalPartsTaken/30*100, color: 'green', icon: 'up'}]}></StatsRing>
                    </div>

                    <QuestionItem fontSize={"1.1rem"}>
                            {LanguageData["/cuz"].Before.Question}
                    </QuestionItem>
                </QuestionInnerContainer> */}


                <RespondContainer visibility={hideRespond}>
                    <RespondOuterContainer>
                    <RespondInnerContainer>
                        {
                            Language[1].cevaplar.map(({cevap, alindi, isim}) => (

                                <ResponseItem bgColor={alindi} onClick={()=>{

                                    if (alindi) {
                                        setActiveHatimSubKey(Language.subKey);
                                        if(!Array.isArray(LocDb.ref("Hatim/adminToken").get()))
                                            LocDb.ref("Hatim/adminToken").set([])
                                        let filtered = LocDb.ref("Hatim/adminToken").get().filter(x=>Object.keys(x)[0].toString() == extractKey().replace("/","").toString());
                                        if(filtered.length == 0){
                                            switch (currentApi) {
                                                case 2:
                                                    if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                                    let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                                    if(localStorageCuzObj[Language.subKey] == null)
                                                        localStorageCuzObj[Language.subKey] = [];
                                                    if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                                        return;
                                                    }
                                                    break;
                                                case 1:
                                                    if(!JSON.parse(localStorage.getItem("cuz_v1")).includes(cevap)){
                                                        return;
                                                    }
                                                    break;
                                            }

                                            setTakePart(LanguageData["/cuz"].Button.TakeCancel)
                                            setPartIptal(true);
                                            //unnecessary, please fix it
                                            setHatimNo(cevap);
                                            setUsername(isim);
                                            setHideDialogBox(true);
                                            return;
                                        }else{
                                            dispatch(cuzModalActions.changeSubKey(Language.subKey))
                                            dispatch(cuzModalActions.changeName(isim))
                                            dispatch(cuzModalActions.changeCuzNo(cevap))
                                            dispatch(cuzModalActions.toggleVisibility())
                                            return;
                                        }


                                    }

                                    setTakePart(LanguageData["/cuz"].Button.Take);
                                    setHatimNo(cevap);
                                    setActiveHatimSubKey(Language.subKey);
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
                                        setActiveHatimSubKey(Language.subKey);
                                        if(!Array.isArray(LocDb.ref("Hatim/adminToken").get()))
                                            LocDb.ref("Hatim/adminToken").set([])
                                        let filtered = LocDb.ref("Hatim/adminToken").get().filter(x=>Object.keys(x)[0].toString() == extractKey().replace("/","").toString());
                                        if(filtered.length == 0){
                                            switch (currentApi) {
                                                case 2:
                                                    if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                                    let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                                    if(localStorageCuzObj[Language.subKey] == null)
                                                        localStorageCuzObj[Language.subKey] = [];
                                                    if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                                        return;
                                                    }
                                                    break;
                                                case 1:
                                                    if(!JSON.parse(localStorage.getItem("cuz_v1")).includes(cevap)){
                                                        return;
                                                    }
                                                    break;
                                            }

                                            setTakePart(LanguageData["/cuz"].Button.TakeCancel)
                                            setPartIptal(true);
                                            //unnecessary, please fix it
                                            setHatimNo(cevap);
                                            setUsername(isim);
                                            setHideDialogBox(true);
                                            return;
                                        }else{
                                            dispatch(cuzModalActions.changeSubKey(Language.subKey))
                                            dispatch(cuzModalActions.changeName(isim))
                                            dispatch(cuzModalActions.changeCuzNo(cevap))
                                            dispatch(cuzModalActions.toggleVisibility())
                                            return;
                                        }


                                    }

                                    setTakePart(LanguageData["/cuz"].Button.Take);
                                    setHatimNo(cevap);
                                    setActiveHatimSubKey(Language.subKey);
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
                                        setActiveHatimSubKey(Language.subKey);
                                        if(!Array.isArray(LocDb.ref("Hatim/adminToken").get()))
                                            LocDb.ref("Hatim/adminToken").set([])
                                        let filtered = LocDb.ref("Hatim/adminToken").get().filter(x=>Object.keys(x)[0].toString() == extractKey().replace("/","").toString());
                                        if(filtered.length == 0){
                                            switch (currentApi) {
                                                case 2:
                                                    if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                                    let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                                    if(localStorageCuzObj[Language.subKey] == null)
                                                        localStorageCuzObj[Language.subKey] = [];
                                                    if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                                        return;
                                                    }
                                                    break;
                                                case 1:
                                                    if(!JSON.parse(localStorage.getItem("cuz_v1")).includes(cevap)){
                                                        return;
                                                    }
                                                    break;
                                            }

                                            setTakePart(LanguageData["/cuz"].Button.TakeCancel)
                                            setPartIptal(true);
                                            //unnecessary, please fix it
                                            setHatimNo(cevap);
                                            setUsername(isim);
                                            setHideDialogBox(true);
                                            return;
                                        }else{
                                            dispatch(cuzModalActions.changeSubKey(Language.subKey))
                                            dispatch(cuzModalActions.changeName(isim))
                                            dispatch(cuzModalActions.changeCuzNo(cevap))
                                            dispatch(cuzModalActions.toggleVisibility())
                                            return;
                                        }


                                    }

                                    setTakePart(LanguageData["/cuz"].Button.Take);
                                    setHatimNo(cevap);
                                    setActiveHatimSubKey(Language.subKey);
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

                </HatimContainer>

                </>
                })}



           {  (currentApi==2) && (JSON.parse(localStorage.getItem("CuzKeyler")) ? JSON.parse(localStorage.getItem("CuzKeyler")) : [] ).includes(extractKey()) && !loadingVisibility && <YeniHatimWrapper>
                <YeniHatimContainer>
                    <YeniHatimButton id="NewSubKhatm" onClick={()=>{
                        dispatch(yesNoDialogAlertActions.changeText(LanguageData["/cuz"].AddKhatmAlert.Question))
                        dispatch(yesNoDialogAlertActions.toggleVisibility())
                    }}>
                        <YeniHatimIcon />
                        <YeniHatimText>{LanguageData["/cuz"].NewSubKhatm}</YeniHatimText>
                    </YeniHatimButton>
                </YeniHatimContainer>
            </YeniHatimWrapper>}

        </QuestionContainer>
        </>
    )
};

export default Question
