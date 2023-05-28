










import React from 'react'
import { Button, createStyles } from "@mantine/core";
import { Container, YesNoButton, YesNoButtonContainer, YesNoButtonLayout, YesNoContainer, YesNoLayout, YesNoText } from './YesNoDialogElements'
import { useYesNoDialogAlert, yesNoDialogAlertActions, yesNoDialogAlertFunctions } from 'features/yesNoDialogAlert';
import Language from 'strings';
import { useDispatch } from 'react-redux';

const useStyles = createStyles((theme)=>({
    button:{
        color: 'black'
    }
}))

const YesNoDialog = ({yesHandler, noHandler}) => {
  const {classes} = useStyles();
  const {visible, text, newYearlyKhatm} = useYesNoDialogAlert();
  const dispatch = useDispatch();

  const noHandlerContainer = () => {
    if(newYearlyKhatm == true){
        dispatch(yesNoDialogAlertActions.changeNewYearlyKhatm(false));
        dispatch(yesNoDialogAlertActions.toggleVisibility());
        return;
    }
    noHandler();

  }

  return (
    <Container visible={visible}>
        <YesNoContainer>
            <YesNoLayout>

                <YesNoText>{text}</YesNoText>
 
                <YesNoButtonContainer>
                    <YesNoButtonLayout>

                        <Button className={classes.button} color="yellow" onClick={()=>{
                            if(newYearlyKhatm == true){
                                dispatch(yesNoDialogAlertFunctions.newYearlyKhatmV3());
                                return;
                            }
                            yesHandler();
                        }}>{Language["/cuz"].AddKhatmAlert.YesButton}</Button>
                        <Button color="red" className={classes.button} onClick={noHandlerContainer}>{Language["/cuz"].AddKhatmAlert.NoButton}</Button>
 
                    </YesNoButtonLayout>
                </YesNoButtonContainer>
            
            </YesNoLayout>
        </YesNoContainer>
    </Container>
  )
}

export default YesNoDialog