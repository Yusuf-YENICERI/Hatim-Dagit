










import React from 'react'
import { Button, createStyles } from "@mantine/core";
import { Container, YesNoButton, YesNoButtonContainer, YesNoButtonLayout, YesNoContainer, YesNoLayout, YesNoText } from './YesNoDialogElements'
import { useYesNoDialogAlert } from '../../features/yesNoDialogAlert';
import Language from '../../strings'

const useStyles = createStyles((theme)=>({
    button:{
        color: 'black'
    }
}))

const YesNoDialog = ({yesHandler, noHandler, hatimlerVisibilities, toggleHatimlerVisibilities}) => {
  const {classes} = useStyles();
  const {visible, text} = useYesNoDialogAlert();

  return (
    <Container visible={visible}>
        <YesNoContainer>
            <YesNoLayout>

                <YesNoText>{text}</YesNoText>
 
                <YesNoButtonContainer>
                    <YesNoButtonLayout>

                        <Button className={classes.button} color="yellow" onClick={()=>{
                            yesHandler();
                            let newArr = [...hatimlerVisibilities];
                            let arrLength = newArr.length + 1;
                            for (let i = 0; i < arrLength; i++) {
                                newArr[i] = false;
                            }
                            newArr[newArr.length-1] = true;
                            toggleHatimlerVisibilities(newArr);
                        }}>{Language["/cuz"].AddKhatmAlert.YesButton}</Button>
                        <Button color="red" className={classes.button} onClick={noHandler}>{Language["/cuz"].AddKhatmAlert.NoButton}</Button>
 
                    </YesNoButtonLayout>
                </YesNoButtonContainer>
            
            </YesNoLayout>
        </YesNoContainer>
    </Container>
  )
}

export default YesNoDialog