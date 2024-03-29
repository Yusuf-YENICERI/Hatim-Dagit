//                          BİSMİLLAHİRRAHMANİRRAHİM




import React from 'react'
import { PwaAppleShareIcon, PwaContainer, PwaIcon, PwaIconContainer, PwaTextContainer, PwaTextDefault, PwaTextStrong } from './PwaElements'
import close from '../../../icons/close.svg';
import Language from '../../../strings/index';


const SorryMessage = () => {
    return (
        <>
            <PwaContainer id={"sorry_message"}>
                {/* <PwaIconContainer>
                    <PwaIcon src={close} onClick={()=>{
                        let sorry_message_extra = document.getElementById('sorry_message');
                    }}/>
                </PwaIconContainer> */}
                <PwaTextContainer>
                    <PwaTextDefault>{Language.Pwa.SorryMessage[0]}
                    </PwaTextDefault>
                    <br/>
                    <PwaTextDefault>{Language.Pwa.SorryMessage[1]}
                    </PwaTextDefault>
                    <br/>
                    <PwaTextDefault>{Language.Pwa.SorryMessage[2]}
                    </PwaTextDefault>
                    <br/>
                    <PwaTextDefault>{Language.Pwa.SorryMessage[3]}
                    </PwaTextDefault>
                    <br/>
                    <PwaTextDefault>{Language.Pwa.SorryMessage[4]}
                    </PwaTextDefault>
                    <br/>
                    <PwaTextDefault>{Language.Pwa.SorryMessage[5]}
                    </PwaTextDefault>
                    <br/>
                </PwaTextContainer>
            </PwaContainer>
        </>
    )
}

export default SorryMessage
