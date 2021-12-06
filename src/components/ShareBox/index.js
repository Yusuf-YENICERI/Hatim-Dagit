






import React, {useState} from 'react'
import { ShareBox, ShareContainer, ShareText, ShareLink, ShareIcon, ShareInputBox, ShareItemContainer, ShareItemIcon, ShareItemText } from "./ShareBoxElements";
import LanguageData from '../../strings';
import close from '../../icons/close.svg';
import sms from '../../icons/sms.svg';
import whatsapp from '../../icons/whatsapp.svg';


const ShareDialogBox = ({shareBoxVisibility, changeShareBoxVisibility}) => {

    const [hideShareBox, setHideShareBox] = useState(false);

    return (
        <>
            <ShareBox visibility={shareBoxVisibility}>
                <ShareIcon src={close} iconSize={"30px"} alignEnd={true} onClick={
                        ()=>{
                            changeShareBoxVisibility();
                        }
                    } />

                <ShareText fontSize={"20px"}>
                     {LanguageData["/cuz"].ShareBox.Title}
                </ShareText>

                <ShareItemContainer onClick={()=>{
                    if(navigator.userAgent.match(/Android/i)){
                        window.open('sms:?body=' + window.location, '_blank')
                    }else{
                        window.open('sms:&body=' + window.location, '_blank')
                    }
                }}>
                    <ShareItemIcon src={sms} />
                    <ShareItemText>{LanguageData["/cuz"].ShareBox.Sms}</ShareItemText>
                </ShareItemContainer>


                <ShareItemContainer onClick={()=>{
                    window.open("whatsapp://send?text=" + window.location)
                }}>
                    <ShareItemIcon src={whatsapp} />
                    <ShareItemText>{LanguageData["/cuz"].ShareBox.Whatsapp}</ShareItemText>
                </ShareItemContainer>



            </ShareBox>

        </>
    )
}

export default ShareDialogBox
