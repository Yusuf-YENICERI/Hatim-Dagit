//                                     BİSMİLLAHİRRAHMANİRRAHİM
//                                          ALLAHU  EKBER
//                                          ELHAMDÜLİLLAH


import React, {useState, useEffect, useContext} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {FaBars} from 'react-icons/fa'
import {QuestionContainer, QuestionInnerContainer, QuestionItem, RespondContainer, RespondInnerContainer, ResponseItem
, ResponseLogo, ResponseText, BackButtonIcon, BackContainer, RespondOuterContainer,
DialogBox, DialogText, DialogLink, DialogIcon, DialogContainer, DialogInputBox, NavBtnLink,
LoadingContainer, LoadingItem,
CopyContainer, CopyItem, CopyIcon,
ShareContainer, ShareItem, ShareIcon,
YeniHatimWrapper, YeniHatimContainer, YeniHatimButton, YeniHatimIcon, YeniHatimText,
HideHatimIcon, ShowHatimIcon, HatimContainer, HatimIconContainer, HatimIconText, CuzlerDescription, CuzlerFinishDate,
IsReadItem, IsReadText, ResponseItemContainer, RefreshKhatmsContainer, RefreshKhatmsIcon, RefreshKhatmsItem,
DeleteHatimIcon, DeleteHatimIconContainer,
HatimIconTemplate
} from './QuestionElements';
import AskDialog from "../AskDialog";
import LanguageData from '../../../strings';
import {dataFormat} from '../../../backend/datas/dataFormat';
import { removeAll, objectToArray, removeAll_v1, isKhatmFull, hatimSiraBelirle, setLanguage } from "../../../common";
import { FaGithub } from "react-icons/fa";
import backButton from '../../../icons/button.svg';
import copy from '../../../icons/copy.svg';
import share from '../../../icons/share.svg';
import close from '../../../icons/close.svg';
import {DatabaseContext} from '../../../backend';
import ShareBox from '../ShareBox';
import { extractKey, initializeLocalStorage } from "../../../common";
import { Language } from '@styled-icons/ionicons-outline';
import { RefreshCircle } from '@styled-icons/ionicons-outline';
import AlertDialog from '../AlertDialog';
import StatsRing from '../RingProgress';
import CuzlerHatimCard from '../CuzlerHatimCard';
import YesNoDialog from "../YesNoDialog";
import { useNotification, notificationActions } from '../../../features/notification';
import { showNotification } from '@mantine/notifications';
import { editModalCuzlerActions, useEditCuzlerModal } from '../../../features/editCuzlerModal';
import { Text, Modal, Button, Center } from '@mantine/core';
import EditModalContent from "../EditModalContent";
import { cuzlerFunctionTriggerActions, useCuzlerFunctionTrigger } from '../../../features/cuzlerFunctionTrigger';
import { yesNoDialogAlertActions } from '../../../features/yesNoDialogAlert';
import {loggerActions, useLogger} from '../../../features/logger'
import CuzModal from "../CuzModal";
import LocDb from "@yusuf-yeniceri/easy-storage";
import { cuzModalActions, useCuzModal } from '../../../features/cuzModal';
import AlertDialogCommon from '../../common/AlertDialogCommon'
import Logger from '../../../backend/APIs/firebase_api/logger';
import { alertDialogActions } from '../../../features/alertDialog';
import { loadingOverlayActions } from 'features/loadingOverlay';
import { isReadDialogAlertActions } from 'features/isReadDialogAlert';
import IsReadDialog from '../IsReadDialog/isReadDialog'



const Question = ({ toggle }) => {

    const database = useContext(DatabaseContext)
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
    const [activeHatimSubKeyFull, setActiveHatimSubKeyFull] = useState(false);

    const [initialRunDone, setInitialRunDone] = useState(false);
    const [makeNewHatimState, setMakeNewHatimState] = useState(false);
    const [makeNewHatim, setMakeNewHatim] = useState(false);
    const [currentKhatmSubKey, setCurrentKhatmSubKey] = useState(undefined);
    const [khatmSubKeys, setKhatmSubKeys] = useState([])
    const [khatmsFetched, setKhatmsFetched] = useState([])
    const [isRefreshKhatmClickable, setIsRefreshKhatmClickable] = useState(true);

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
    /**AskDialog End */


    const changeShareBoxVisibility = () => {
        setHideShareBox(!hideShareBox)
    }


    /** AlertDialog */
    const [alertVisible, setAlertVisible] = useState(false)
    const toggleAlertVisibility = () => {
        setAlertVisible(!alertVisible)
    }
    /** AlertDialog End */

    /** AlertDialogCommon */
    const {errorKey} = useLogger();
    const yesClick = () => {
        dispatch(alertDialogActions.toggleVisibility())
        window.location.href = `mailto:hep.beraber.okuyalim@gmail.com?subject=Hata var, hata kodu:${errorKey}`;
    }

    const noClick = async () => {
        let errorRef = errorKey
        await database.logger.deleteLog(errorRef);
        dispatch(alertDialogActions.toggleVisibility())
        setAlertVisible(false);
    }
    /** AlertDialogCommon End */


    /** YesNoDialog */
    const yesHandler = async () => {
        dispatch (loadingOverlayActions.toggleVisibility ());
        let _hatimKey = await database.yeniHatim(hatimKonu, hatimBitisTarihi, true);
        await addNewKhatm()
        dispatch(yesNoDialogAlertActions.toggleVisibility())
        dispatch (loadingOverlayActions.toggleVisibility ());
        let newArr = [...hatimlerVisibilities, false];
        setHatimlerVisibilities (newArr);
    }

    /** Delete a sub Khatm yesHandler */
    const yesHandlerForASubKhatm = async ({_subKey, _index}) => {
        dispatch(loadingOverlayActions.toggleVisibility());

        await database.deleteSubKhatm({subKey: _subKey});

        let newSubKhatms = allLanguage.filter(_language => _language.subKey != _subKey);
        setAllLanguage(newSubKhatms);

        dispatch(loadingOverlayActions.toggleVisibility());
        dispatch(yesNoDialogAlertActions.toggleVisibility());
        let newArr = [...hatimlerVisibilities]
        newArr.splice(_index, 1);
        setHatimlerVisibilities(newArr);
    }

    const noHandler = () =>  dispatch(yesNoDialogAlertActions.toggleVisibility())
    ;

    const [yesHandlerState, setYesHandlerState] = useState(()=> yesHandler)
    const [yesHandlerStateParameters, setYesHandlerStateParameters] = useState(null);
    const [noHandlerState, setNoHandlerState] = useState(()=>noHandler)

    const toggleYesHandlerState = (payload) => {
        setYesHandlerState(()=>payload)
    }

    const toggleNoHandlerState = (payload) => {
        setNoHandlerState(()=>payload)
    }
    /** YesNoDialog End */


    /** CuzlerHatimCard */

    const [cuzlerHatimCardTitle, setCuzlerHatimCardTitle] = useState("")
    const [cuzlerHatimCardDescription, setCuzlerHatimCardDescription] = useState("")
    const [cuzlerHatimCardDate, setCuzlerHatimCardDate] = useState("")


    /** CuzlerHatimCard End */



    /** current index for Hatimler visibilities */
    const getCurrentIndex = (allLanguage) => {
        let currentIndex = 0;
        for (let i = 0; i < allLanguage.length; i++) {

            let totalCevap = allLanguage[i][1].cevaplar.filter((cevap)=>cevap.alindi).length +
            allLanguage[i][2].cevaplar.filter((cevap)=>cevap.alindi).length +
            allLanguage[i][3].cevaplar.filter((cevap)=>cevap.alindi).length;

            if(totalCevap != 30){
                currentIndex = i;
                break;
            }
        }

        return currentIndex;
    }
    /** current index end */


    const initialRun = async () => {
        try {

            let hatimKeyLength = extractKey().length;

            if(hatimKeyLength < 20){
                setWaitText(LanguageData["/cuz"].Before.WrongLength)
                return;
            }

            let result = await database.tasarrufluHatimGetir();

            if(result.versionError == true){
                window.location.href = window.location.href.replace('cuz','cuzv2');
            }

            while(result.data == undefined){
                result = await database.tasarrufluHatimGetir();
            }

            result = result.data

            if(result.delete != undefined){
                setLoadingVisibility(true)
                setWaitText(LanguageData["/cuz"].Before.Deleted)
                return;
            }

            const {title, description, date} = await database.getTitleAndDescription({subKey: Object.values(result.khatmSubKeys)[0]});

            setCuzlerHatimCardTitle(title)
            setCuzlerHatimCardDescription(description)
            setCuzlerHatimCardDate(date)

            // console.log(result.khatmSubKeys)
            setKhatmSubKeys(result.khatmSubKeys);
            setCurrentKhatmSubKey(result.activeSubKhatmKey)

            let makeNewHatimStateTemp = result.makeNewHatim;

            if(makeNewHatimStateTemp != undefined){
                setMakeNewHatimState(makeNewHatimStateTemp);
            }

            const makeNewHatimActiveResult = result.makeNewHatim;
            if(makeNewHatimActiveResult){
                setMakeNewHatim(makeNewHatimActiveResult);
            }

            let allHatimler = result.khatms;
            if(!Array.isArray(result)){
                // allHatimler = objectToArray(result);
                
                if(allHatimler[0].isRamazan){
                    window.location = `/ramazan/${extractKey()}`
                }

                if(allHatimler[0].isMonths3 != undefined ){

                    if(allHatimler[0].isMonths3.eachday1part ?? false){
                        window.location = `/ucaylarhergun1cuz/${extractKey()}`
                    }
                }

                setKhatmsFetched(allHatimler.filter(hatim => hatim.baslik != "ayarlanmadı").map(hatim => hatim.subKey))
                console.log(allHatimler.filter(hatim => hatim.baslik != "ayarlanmadı").map(hatim=>hatim.subKey))
            }

            
            // setTotalPartsTaken(database.countNumberOfCuzs(allHatimler))
            setAllLanguage(allHatimler);
            setHideRespond(true);
            setLoadingVisibility(false);
            setHatimlerVisibilities((()=>{
                let newArr = [];
                for (let i = 0; i < Object.keys(result.khatmSubKeys).length; i++) {
                    newArr[i] = false;
                }
                let currentIndex = Object.values(result.khatmSubKeys).indexOf(result.activeSubKhatmKey);
                newArr[currentIndex] = true;
                return newArr;
            })());

            let cuzStorage = JSON.parse(localStorage.getItem("cuz"));

            if(cuzStorage == null){
                initializeLocalStorage("cuz");
            };

        } catch (error) {
            console.log(`Cuzler\\index.js: ${error}`);
            setWaitText(LanguageData["/cuz"].Before.Error)
            return;
        }
    }

    const addNewKhatm = async () => {
        try {
            let result = await database.tasarrufluHatimGetir();
            while(result.error != undefined){
                result = await database.tasarrufluHatimGetir();
            }

            result = result.data
            
            setAllLanguage(result.khatms);

        }catch(error){
            console.log(`Cuzler\\index.js:addNewKhatm: ${error}`);
            setWaitText(LanguageData["/cuz"].Before.Error)
            return;
        }
    }

    const updateKhatms = async () => {
        let altHatimResult = await database.altHatimGetir({altHatimKey: activeHatimSubKey})
            if(altHatimResult.error == undefined){
                setAllLanguage(prevState => {
                    let _newState = [...prevState];
                    let index = allLanguage.findIndex(item => item.subKey == activeHatimSubKey);
                    _newState[index] = altHatimResult.data;
                    console.log(_newState)
                    return _newState;
                })
            }else{
                alert('Güncel veriler çekilemedi!')
            }
    }

    const refreshKhatms = async () => {
        khatmsFetched.map(async (khatmSubKey) => {
            let altHatimResult = await database.altHatimGetir({altHatimKey: khatmSubKey})
            if(altHatimResult.error == undefined){
                setAllLanguage(prevState => {
                    let _newState = [...prevState];
                    let index = allLanguage.findIndex(item => item.subKey == khatmSubKey);
                    _newState[index] = altHatimResult.data;
                    console.log(_newState)
                    return _newState;
                })
            }else{
                console.log('Güncel veriler çekilemedi!')
            }
        })
        
    }

    const cuzlerFunctionTrigger = useCuzlerFunctionTrigger();
    let databaseListener = null;

    useEffect(async () => {

        let totalReadParts = await database.getTotalReadParts();
        if (totalReadParts.error == undefined){
            setTotalPartsTaken(totalReadParts.data);
        }

        if(!initialRunDone){
            await initialRun();
            setInitialRunDone(true);
        }
        if(cuzlerFunctionTrigger.visible){
            await updateKhatms();
            dispatch(cuzlerFunctionTriggerActions.toggleVisibility())
        }
      }, [cuzlerFunctionTrigger.visible, hatimlerVisibilities, allLanguage, currentKhatmSubKey]);

    return (
        <>
        <QuestionContainer id="questionContainer" minHeight={(window.innerHeight-80).toString() + "px"} hatimlerVisibility={hatimlerVisibilities[0]} >

        {/** Hatim editleme*/}
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



        {/**Yeni Hatim ekleme */}
        <YesNoDialog yesHandler={yesHandlerState} noHandler={noHandlerState} yesHandlerParameters={yesHandlerStateParameters} hatimlerVisibilities={hatimlerVisibilities} toggleHatimlerVisibilities={(newState)=>{
            setHatimlerVisibilities(newState)
        }} />

        {/** Cüz alınamazsa*/}
        <AlertDialog text={LanguageData["/cuz"].AlertDialog.Title} textButton={LanguageData["/cuz"].AlertDialog.Button}
         alertVisible={alertVisible} toggleAlertVisibility={toggleAlertVisibility}>
        </AlertDialog>

        {/** Cüz okundu mu diye sor*/}
        <IsReadDialog />
        

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
                   let newLocation = window.location.href.replace("localhost:3000","hatimdagit.com")
                   newLocation = newLocation.replace("hatim-dagit.web.app","hatimdagit.com")
                   var text = newLocation;
                   navigator.clipboard.writeText(text).then(function() {
                        setLinkCopiedText(LanguageData["/cuz"].After.Copy.After)
                   }, function(err) {});
                }}>
            <CopyIcon src={copy} iconSize={"30px"} ></CopyIcon>
            <CopyItem>{linkCopiedText}</CopyItem>
        </CopyContainer>


        {/** Tek Cüz editleme*/}
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

        {/** tek Cüz alma eski yöntem*/}
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
                        await database.cuzIptalTasarruflu(hatimNo, activeHatimSubKey, activeHatimSubKeyFull);

                        if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                        let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                        localStorageCuzObj[activeHatimSubKey] = localStorageCuzObj[activeHatimSubKey] || [];
                        localStorageCuzObj =  removeAll(localStorageCuzObj, hatimNo, activeHatimSubKey);
                        localStorage.setItem("cuz", JSON.stringify( localStorageCuzObj ));

                        
                        // setTotalPartsTaken(database.countNumberOfCuzs(tempAllLanguages))
                        setTakePart(LanguageData["/cuz"].Button.Take)
                        setPartIptal(false);
                    }else{

                        let result = await database.cuzAl(username, hatimNo, activeHatimSubKey, true, makeNewHatimState, true);
                        if(result.code == -1){
                            toggleAlertVisibility();
                            dispatch(loggerActions.changeErrorKey(result.errorKey))
                        }else{

                            if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                            let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                            if(localStorageCuzObj[activeHatimSubKey] == null)
                                localStorageCuzObj[activeHatimSubKey] = [];
                            localStorageCuzObj[activeHatimSubKey].push(hatimNo);
                            localStorage.setItem("cuz",JSON.stringify(localStorageCuzObj));

                            // setTotalPartsTaken(database.countNumberOfCuzs(tempAllLanguages))
                        }
                    }



                    let altHatimResult = await database.altHatimGetir({altHatimKey: activeHatimSubKey})
                    if(altHatimResult.error == undefined){
                        setAllLanguage(prevState => {
                            let _newState = [...prevState];
                            let index = allLanguage.findIndex(item => item.subKey == activeHatimSubKey);
                            _newState[index] = altHatimResult.data;
                            console.log(_newState)
                            return _newState;
                        })
                        const {sira, subSira} = hatimSiraBelirle(hatimNo)
                        if (!partIptal && (altHatimResult.data[sira]['cevaplar'][subSira]['isim'] != username)){
                            toggleAlertVisibility();
                            // dispatch(loggerActions.changeErrorKey(result.errorKey))
                        }else if(partIptal && (altHatimResult.data[sira]['cevaplar'][subSira]['isim'] != '')){
                            alert('Cüz iptal edilemedi!')
                        }
                    }else{
                        alert('Güncel veriler çekilemedi!')
                    }
                }}>
                    {takePart}
                </NavBtnLink>



        </DialogBox>

        {/** Mobil Hatim paylaş*/}
        <ShareBox hatimHeader={allLanguage[0].baslik} shareBoxVisibility={hideShareBox} changeShareBoxVisibility={changeShareBoxVisibility} />


        {/* Hatimler ikonu ve yazısı */}
        { !loadingVisibility && allLanguage.map( (Language, index) => {

                // console.log(`message from: `);
                // console.log(Language);


        return <>

{ (index==0) && <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {
            <CuzlerHatimCard header={cuzlerHatimCardTitle} description={cuzlerHatimCardDescription}
                            progress={totalPartsTaken/(allLanguage.length*30)*100} leftCuzs={allLanguage.length*30-totalPartsTaken}
                            duaLeftDays={cuzlerHatimCardDate.split("-").reverse().join("/")}
                            yesHandler={yesHandlerState} toggleYesHandler={toggleYesHandlerState}
                            noHandler={noHandlerState} toggleNoHandler={toggleNoHandlerState}
                            setYesHandlerStateParameters={setYesHandlerStateParameters}

            ></CuzlerHatimCard>
            
            }
        </div>}
        {(index==0) && <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'right', marginRight: '30px'}}>
            <RefreshKhatmsContainer onClick={async ()=>{
                    if(isRefreshKhatmClickable == false){
                        alert('20 saniyede bir yenileme yapabilirsiniz!')
                        return;
                    }

                    dispatch(loadingOverlayActions.toggleVisibility());

                    let totalReadParts = await database.getTotalReadParts();
                    if (totalReadParts.error == undefined){
                        setTotalPartsTaken(totalReadParts.data);
                    }
                    await refreshKhatms();
                    
                    dispatch(loadingOverlayActions.toggleVisibility());
                    setIsRefreshKhatmClickable(false);
                    setTimeout(()=>{
                        setIsRefreshKhatmClickable(true)
                    }, 20000);
                    }}>
                    <RefreshCircle
                            color={'green'} 
                            height="30px"
                            width="30px"
                            />
                    <RefreshKhatmsItem>{"Yenile"}</RefreshKhatmsItem>
                </RefreshKhatmsContainer>
        </div>}


        {  (hatimlerVisibilities.length > 1) && <QuestionItem fontSize={"1.6rem"}>
                
                <HatimIconTemplate>
                    <DeleteHatimIconContainer>
                        <DeleteHatimIcon onClick={async ()=>{
                            toggleYesHandlerState(yesHandlerForASubKhatm)
                            setYesHandlerStateParameters({_subKey: Language.subKey, _index:index})
                            dispatch(yesNoDialogAlertActions.changeText("Bu Hatmi silmek istediğinize emin misiniz?"))
                            dispatch(yesNoDialogAlertActions.toggleVisibility())
                            }}>Sil</DeleteHatimIcon>
                    </DeleteHatimIconContainer>
                

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
                                    }}>Gizle</HideHatimIcon>
                            </HatimIconContainer>
                        </>
                            :
                        <>
                            <HatimIconContainer>
                                <ShowHatimIcon onClick={async ()=>{
                                     setHatimlerVisibilities(prevState=>{
                                        let _newState = [...prevState];
                                        _newState[index] = !hatimlerVisibilities[index];
                                        return _newState;
                                    })
                                    if(khatmsFetched.indexOf(Language.subKey) == -1){
                                        dispatch(loadingOverlayActions.toggleVisibility());
                                        let altHatimResult = await database.altHatimGetir({altHatimKey: Language.subKey})
                                        if(altHatimResult.error == undefined){
                                            setAllLanguage(prevState => {
                                                let _newState = [...prevState];
                                                _newState[index] = altHatimResult.data;
                                                console.log(_newState)
                                                return _newState;
                                            })
                                            setKhatmsFetched(prevState => {
                                                let _newState = [...prevState];
                                                _newState.push(Language.subKey);
                                                return _newState;
                                            })
                                            console.log(altHatimResult.data)
                                        }
                                        dispatch(loadingOverlayActions.toggleVisibility());
                                        //alt hatim getir
                                    }
                                   
                                }}>Göster</ShowHatimIcon>
                            </HatimIconContainer>
                        </>)
                    :
                        <></>
                }

                </HatimIconTemplate>
            </QuestionItem>}

            {/* Hatmin kendisi */}

        <HatimContainer className="hatimContainer"  visibility={hatimlerVisibilities[index]} >
        

        <RespondContainer visibility={hideRespond}>
            <RespondOuterContainer>
            <RespondInnerContainer>
                {
                    Language[1].cevaplar.map(({cevap, alindi, isim, isRead}) => (
                        <ResponseItemContainer>
                            <ResponseItem bgColor={alindi} onClick={()=>{

                                if (alindi) {
                                    setActiveHatimSubKey(Language.subKey);
                                    setActiveHatimSubKeyFull(isKhatmFull(Language));
                                    if(!Array.isArray(LocDb.ref("Hatim/adminToken").get()))
                                        LocDb.ref("Hatim/adminToken").set([])
                                    let filtered = LocDb.ref("Hatim/adminToken").get().filter(x=>Object.keys(x)[0].toString() == extractKey().replace("/","").toString());
                                    if(filtered.length == 0){
                                        if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                        let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                        if(localStorageCuzObj[Language.subKey] == null)
                                            localStorageCuzObj[Language.subKey] = [];
                                        if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                            return;
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
                                        dispatch(cuzModalActions.changePartsFull(isKhatmFull(Language)))
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

                            {alindi && <IsReadItem bgColor={isRead} onClick={()=>{
                                    setActiveHatimSubKey(Language.subKey);
                                    dispatch(isReadDialogAlertActions.changeIsRead(isRead))
                                    if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                    let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                    if(localStorageCuzObj[Language.subKey] == null)
                                        localStorageCuzObj[Language.subKey] = [];
                                    if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                        return;
                                    }
                                    
                                    dispatch(isReadDialogAlertActions.changePartNo(cevap))
                                    dispatch(isReadDialogAlertActions.changeSubKey(Language.subKey))

                                    dispatch(isReadDialogAlertActions.toggleVisibility())
                            }}>
                                <IsReadText>{isRead ? LanguageData.IsReadDialog.Read : LanguageData.IsReadDialog.NotRead}</IsReadText>
                            </IsReadItem>}
                        </ResponseItemContainer>
                    ))
                }
                {
                    Language[2].cevaplar.map(({cevap, alindi, isim, isRead}) => (
                    <ResponseItemContainer>
                        <ResponseItem bgColor={alindi} onClick={()=>{
                            if (alindi) {
                                setActiveHatimSubKey(Language.subKey);
                                setActiveHatimSubKeyFull(isKhatmFull(Language));
                                if(!Array.isArray(LocDb.ref("Hatim/adminToken").get()))
                                    LocDb.ref("Hatim/adminToken").set([])
                                let filtered = LocDb.ref("Hatim/adminToken").get().filter(x=>Object.keys(x)[0].toString() == extractKey().replace("/","").toString());
                                if(filtered.length == 0){

                                    if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                    let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                    if(localStorageCuzObj[Language.subKey] == null)
                                        localStorageCuzObj[Language.subKey] = [];
                                    if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                        return;
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
                                    dispatch(cuzModalActions.changePartsFull(isKhatmFull(Language)))
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

                        
                        {alindi && <IsReadItem bgColor={isRead} onClick={()=>{
                            setActiveHatimSubKey(Language.subKey);
                            dispatch(isReadDialogAlertActions.changeIsRead(isRead))
                            if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                            let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                            if(localStorageCuzObj[Language.subKey] == null)
                                localStorageCuzObj[Language.subKey] = [];
                            if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                return;
                            }
                            
                            dispatch(isReadDialogAlertActions.changePartNo(cevap))
                            dispatch(isReadDialogAlertActions.changeSubKey(Language.subKey))

                            dispatch(isReadDialogAlertActions.toggleVisibility())
                        }}>
                        <IsReadText>{isRead ? LanguageData.IsReadDialog.Read : LanguageData.IsReadDialog.NotRead}</IsReadText>
                        </IsReadItem>}
                    </ResponseItemContainer>
                    ))
                }
                {
                    Language[3].cevaplar.map(({cevap, alindi, isim, isRead}) => (

                        <ResponseItemContainer>
                            <ResponseItem bgColor={alindi} onClick={()=>{

                                if (alindi) {
                                    setActiveHatimSubKey(Language.subKey);
                                    setActiveHatimSubKeyFull(isKhatmFull(Language));
                                    if(!Array.isArray(LocDb.ref("Hatim/adminToken").get()))
                                        LocDb.ref("Hatim/adminToken").set([])
                                    let filtered = LocDb.ref("Hatim/adminToken").get().filter(x=>Object.keys(x)[0].toString() == extractKey().replace("/","").toString());
                                    if(filtered.length == 0){

                                        if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                        let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                        if(localStorageCuzObj[Language.subKey] == null)
                                            localStorageCuzObj[Language.subKey] = [];
                                        if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                            return;
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
                                        dispatch(cuzModalActions.changePartsFull(isKhatmFull(Language)))
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


                            {alindi && <IsReadItem bgColor={isRead} onClick={()=>{
                                    setActiveHatimSubKey(Language.subKey);
                                    dispatch(isReadDialogAlertActions.changeIsRead(isRead))
                                    if(localStorage.getItem("cuz") == null) initializeLocalStorage("cuz");
                                    let localStorageCuzObj = JSON.parse(localStorage.getItem("cuz"));
                                    if(localStorageCuzObj[Language.subKey] == null)
                                        localStorageCuzObj[Language.subKey] = [];
                                    if(!localStorageCuzObj[Language.subKey].includes(cevap)){
                                        return;
                                    }
                                    
                                    dispatch(isReadDialogAlertActions.changePartNo(cevap))
                                    dispatch(isReadDialogAlertActions.changeSubKey(Language.subKey))

                                    dispatch(isReadDialogAlertActions.toggleVisibility())
                            }}>
                                <IsReadText>{isRead ? LanguageData.IsReadDialog.Read : LanguageData.IsReadDialog.NotRead}</IsReadText>
                            </IsReadItem>}

                        </ResponseItemContainer>
                    ))
                }
            </RespondInnerContainer>



            </RespondOuterContainer>


        </RespondContainer>

        </HatimContainer>

        </>
        })}


        {/**Yeni Hatim ekleme butonu */}
        { (! makeNewHatim) && (JSON.parse(localStorage.getItem("CuzKeyler")) ? JSON.parse(localStorage.getItem("CuzKeyler")) : [] ).includes(extractKey()) && !loadingVisibility && <YeniHatimWrapper>
            <YeniHatimContainer>
                <YeniHatimButton id="NewSubKhatm" onClick={()=>{
                    window.alert("Eğer yeni Hatim eklemenize rağmen sayfaya eklenmemişse, lütfen önce sayfayı yenilemeyi deneyin.")
                    toggleYesHandlerState(yesHandler);
                    setYesHandlerStateParameters(null);
                    dispatch(yesNoDialogAlertActions.changeText(LanguageData["/cuz"].AddKhatmAlert.Question))
                    dispatch(yesNoDialogAlertActions.toggleVisibility())
                }}>
                    <YeniHatimIcon />
                    <YeniHatimText>{LanguageData["/cuz"].NewSubKhatm}</YeniHatimText>
                </YeniHatimButton>
            </YeniHatimContainer>
        </YeniHatimWrapper>}

        {makeNewHatim && (JSON.parse(localStorage.getItem("CuzKeyler")) ? JSON.parse(localStorage.getItem("CuzKeyler")) : [] ).includes(extractKey()) &&
        <Center>
            <Button align="center" color="red" size="md" onClick={async ()=>{
                let response = await database.stopMakingNewKhatm();
                if(response == 200){
                    setMakeNewHatim(false);
                }else{
                    alert('Lütfen tekrar deneyin!')
                }
            }}>{LanguageData.AutomaticKhatm}</Button>
        </Center>}

        
        {/** Cüz alınamadığı durumda user agent bildirgesi inşaAllah */}
        <AlertDialogCommon text={LanguageData.AlertDialog.Text} yesClick={yesClick} noClick={noClick} />
        

        </QuestionContainer>
        </>
    )
};

export default Question
