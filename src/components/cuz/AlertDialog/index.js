





import React from 'react'
import { AlertButton, AlertContainer, AlertLayout, AlertText, Container } from './AlertDialogComponents'

const AlertDialog = ({text, textButton, alertVisible, toggleAlertVisibility}) => {
  return (
    <>
        <Container alertVisible={alertVisible}>
            <AlertContainer>
                <AlertLayout>
                    <AlertText>{text}</AlertText>
                    <AlertButton onClick={toggleAlertVisibility}>{textButton}</AlertButton>
                </AlertLayout>
            </AlertContainer>
        </Container>
    </>
  )
}

export default AlertDialog