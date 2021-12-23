//                          BİSMİLLAHİRRAHMANİRRAHİM




import React from 'react'
import { PwaAppleShareIcon, PwaContainer, PwaIcon, PwaIconContainer, PwaTextContainer, PwaTextDefault, PwaTextStrong } from './PwaElements'
import close from '../../icons/close.svg';

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
                    <PwaTextDefault>Bu uygulamayı telefonunuza indirmek için önce
                        tarayıcınızda bulunan
                    <PwaAppleShareIcon />
                     ikonuna tıklayın.
                    Daha sonra açılan menüden
                    <PwaTextStrong>Ana Ekrana Ekle</PwaTextStrong>
                    seçeneğini seçin.
                    {<br/>}
                    Uygulama telefonunuza inecektir inşaAllah.
                    </PwaTextDefault>
                </PwaTextContainer>
            </PwaContainer>
        </>
    )
}

export default Pwa
