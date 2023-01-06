





import React from 'react'
import { AlertButton, AlertContainer, AlertLayout, AlertText, Container, FeedbackButton, NoButton, YesButton } from './AlertDialogComponents'
import {useAlertDialog} from '../../../features/alertDialog'
import Language from '../../../strings'

const AlertDialogCommon = ({text, yesClick, noClick}) => {

  const {visible} = useAlertDialog();

  return (
    <>
        <Container alertVisible={visible}>
            <AlertContainer>
                <AlertLayout>
                    <AlertText>{text}</AlertText>
                    <div>
                      <YesButton onClick={yesClick}>{Language.AlertDialog.Yes}</YesButton>
                      <NoButton bgColor="red" onClick={noClick}>{Language.AlertDialog.No}</NoButton>
                    </div>
                </AlertLayout>
            </AlertContainer>
        </Container>
    </>
  )

}

export default AlertDialogCommon