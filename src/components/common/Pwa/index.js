//                          BİSMİLLAHİRRAHMANİRRAHİM




import React from 'react'
import { PwaAppleShareIcon, PwaContainer, PwaIcon, PwaIconContainer, PwaTextContainer, PwaTextDefault, PwaTextStrong } from './PwaElements'
import close from '../../../icons/close.svg';
import Language from '../../../strings/index';


const Pwa = () => {
    return (
        <>
            <PwaContainer id={"pwa_component"}>
                <PwaIconContainer>
                    <PwaIcon src={close} onClick={()=>{
                        let pwa_component_extra = document.getElementById('pwa_component');
                        pwa_component_extra.style.display = "none";
                    }}/>
                </PwaIconContainer>
                <PwaTextContainer>
                    <PwaTextDefault>{Language.Pwa.Popup[0]}
                    <PwaAppleShareIcon />
                    {Language.Pwa.Popup[1]}
                    <PwaTextStrong>{Language.Pwa.Popup[2]}</PwaTextStrong>
                    {Language.Pwa.Popup[3]}
                    {<br/>}
                    {Language.Pwa.Popup[4]}
                    </PwaTextDefault>
                </PwaTextContainer>
            </PwaContainer>
        </>
    )
}

export default Pwa
