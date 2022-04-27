










import React from 'react'
import { Button, createStyles } from "@mantine/core";
import { Container, YesNoButton, YesNoButtonContainer, YesNoButtonLayout, YesNoContainer, YesNoLayout, YesNoText } from './YesNoDialogElements'

const useStyles = createStyles((theme)=>({
    button:{
        color: 'black'
    }
}))

const YesNoDialog = ({visible, yesHandler, noHandler}) => {
  const {classes} = useStyles();

  return (
    <Container visible={visible}>
        <YesNoContainer>
            <YesNoLayout>

                <YesNoText>Yeni Hatim oluşturmak istediğinize emin misiniz?</YesNoText>
 
                <YesNoButtonContainer>
                    <YesNoButtonLayout>

                        <Button className={classes.button} color="yellow" onClick={yesHandler}>Evet</Button>
                        <Button color="red" className={classes.button} onClick={noHandler}>Hayır</Button>
 
                    </YesNoButtonLayout>
                </YesNoButtonContainer>
            
            </YesNoLayout>
        </YesNoContainer>
    </Container>
  )
}

export default YesNoDialog