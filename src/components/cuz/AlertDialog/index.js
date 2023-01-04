





import React from 'react'
import { AlertButton, AlertContainer, AlertLayout, AlertText, Container, FeedbackButton } from './AlertDialogComponents'
import {useLogger} from '../../../features/logger'

const AlertDialog = ({text, textButton, alertVisible, toggleAlertVisibility}) => {
  
  const {errorKey} = useLogger();
  console.log(errorKey)

  return (
    <>
        <Container alertVisible={alertVisible}>
            <AlertContainer>
                <AlertLayout>
                    <AlertText>{text}</AlertText>
                    <div>
                      <AlertButton onClick={toggleAlertVisibility}>{textButton}</AlertButton>
                      {errorKey && <FeedbackButton bgColor="red" onClick={()=>{
                        window.location.href = `mailto:hep.beraber.okuyalim@gmail.com?subject=Hata var, hata kodu:${errorKey}`;
                      }}>Hata Bildir</FeedbackButton>}
                    </div>
                </AlertLayout>
            </AlertContainer>
        </Container>
    </>
  )
}

export default AlertDialog