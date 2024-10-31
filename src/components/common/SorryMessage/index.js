//                          BİSMİLLAHİRRAHMANİRRAHİM




import React from 'react'
import { PwaAppleShareIcon, PwaContainer, PwaIcon, PwaIconContainer, PwaTextContainer, PwaTextDefault, PwaTextStrong } from './PwaElements'
import close from '../../../icons/close.svg';
import localDb from '@yusuf-yeniceri/easy-storage';
import Language from '../../../strings/index';
import { isEmptyObjectLocDb } from 'common';


const SorryMessage = () => {

    const warningMessage = localDb.ref ('warningMessage').get ();
    if (
    isEmptyObjectLocDb (warningMessage) == false &&
    warningMessage.counter > 3
    ) {
    return <></>;
    }
    

    return (
        <>
            <PwaContainer id={"warning_message"}>
                {/* <PwaIconContainer>
                    <PwaIcon src={close} onClick={()=>{
                        let sorry_message_extra = document.getElementById('sorry_message');
                    }}/>
                </PwaIconContainer> */}
                <PwaTextContainer>
                    <PwaTextDefault style={{fontSize: '2em'}}>{Language.Pwa.SorryMessage[0]}
                    </PwaTextDefault>
                    <br/>
                    <br/>
                    <br/>
                    <PwaTextDefault>{Language.Pwa.SorryMessage[1]}
                    </PwaTextDefault>

                    <button onClick={()=>{
                        localDb.ref('warningMessage').modify(data => {
                            if(isEmptyObjectLocDb(data)){
                                return {counter: 1};
                            }

                            return {counter: data.counter + 1};
                        })
                        document.getElementById ('warning_message').style.display = 'none';

                    }} style={{marginTop: '40px', fontSize: '1.2em', padding: '10px', backgroundColor: 'yellow', borderColor: 'yellow', color: 'black', borderRadius: '10px'}}>Tamam</button>
                </PwaTextContainer>
            </PwaContainer>
        </>
    )
}

export default SorryMessage
