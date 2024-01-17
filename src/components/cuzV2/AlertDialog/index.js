





import React from 'react'
import { AlertButton, AlertContainer, AlertLayout, AlertText, Container, FeedbackButton } from './AlertDialogComponents'
import {useLogger} from '../../../features/logger'
import { useDispatch } from 'react-redux';
import { alertDialogActions } from '../../../features/alertDialog';
import Language from '../../../strings';

const AlertDialog = ({text, textButton, alertVisible, toggleAlertVisibility}) => {
  
  const {errorKey} = useLogger();
  console.log(errorKey)

  const dispatch = useDispatch();

  return (
    <>
        <Container alertVisible={alertVisible}>
            <AlertContainer>
                <AlertLayout>
                    <AlertText>{text}</AlertText>
                    <div>
                      <AlertButton onClick={toggleAlertVisibility}>{textButton}</AlertButton>
                      {errorKey && <FeedbackButton bgColor="red" onClick={()=>{
                        dispatch(alertDialogActions.toggleVisibility())
                      }}>{Language["/cuz"].AlertDialog.Feedback}</FeedbackButton>}
                    </div>
                </AlertLayout>
            </AlertContainer>
        </Container>
    </>
  )
}

export default AlertDialog