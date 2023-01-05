





import React from 'react'
import { AlertButton, AlertContainer, AlertLayout, AlertText, Container, FeedbackButton, NoButton, YesButton } from './AlertDialogComponents'
import {useAlertDialog} from '../../../features/alertDialog'

const AlertDialogCommon = ({text, yesClick, noClick}) => {

  const {visible} = useAlertDialog();

  return (
    <>
        <Container alertVisible={visible}>
            <AlertContainer>
                <AlertLayout>
                    <AlertText>{text}</AlertText>
                    <div>
                      <YesButton onClick={yesClick}>Evet</YesButton>
                      <NoButton bgColor="red" onClick={noClick}>Hayır</NoButton>
                    </div>
                </AlertLayout>
            </AlertContainer>
        </Container>
    </>
  )

}

export default AlertDialogCommon