









import React from 'react'
import { YeniHatimButton, YeniHatimContainer, YeniHatimIcon, YeniHatimText } from './styles'
import { yesNoDialogAlertActions } from 'features/yesNoDialogAlert'
import Language from 'strings'
import { useDispatch } from 'react-redux'

const NewKhatmPart = () => {

const dispatch = useDispatch();

  return (
    <>
    <YeniHatimContainer>
                <YeniHatimButton id="NewSubKhatm" onClick={()=>{
                    dispatch(yesNoDialogAlertActions.changeText(Language["/cuz"].AddKhatmAlert.Question))
                    dispatch(yesNoDialogAlertActions.changeNewYearlyKhatm(true));
                    dispatch(yesNoDialogAlertActions.toggleVisibility())
                }}>
                    <YeniHatimIcon />
                    <YeniHatimText>{Language["/cuz"].NewSubKhatm}</YeniHatimText>
                </YeniHatimButton>
    </YeniHatimContainer>
    </>
  )
}

export default NewKhatmPart