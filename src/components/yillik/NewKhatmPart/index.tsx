









import React, { useContext } from 'react'
import { YeniHatimButton, YeniHatimContainer, YeniHatimIcon, YeniHatimText } from './styles'
import { yesNoDialogAlertActions } from 'features/yesNoDialogAlert'
import Language from 'strings'
import { useDispatch } from 'react-redux'
import { Button, Center } from '@mantine/core'
import { DataServiceContext } from 'backend'
import database from 'backend/database'
import { editModalCuzlerActions } from 'features/editCuzlerModal'

const NewKhatmPart = ({makeNewKhatm}:{makeNewKhatm: boolean|undefined}) => {

const dispatch = useDispatch();

const dataService = useContext( DataServiceContext );

  return (
    <>
    { dataService.isCurrentUserAdmin().data && (makeNewKhatm ?
    <Center>
          <Button color="red" size="md" mb="xl" onClick={async ()=>{
              let response = await dataService.stopMakingNewKhatm();
              if(response.data == 200){
                  dispatch(editModalCuzlerActions.triggerRefetchData());
              }else{
                  alert('Lütfen tekrar deneyin!')
              }
          }}>Otomatik Hatim Oluşturmayı Durdur</Button>
    </Center>
    :
    <YeniHatimContainer>
                <YeniHatimButton id="NewSubKhatm" onClick={()=>{
                    dispatch(yesNoDialogAlertActions.changeText(Language["/cuz"].AddKhatmAlert.Question))
                    dispatch(yesNoDialogAlertActions.changeNewYearlyKhatm(true));
                    dispatch(yesNoDialogAlertActions.toggleVisibility())
                }}>
                    <YeniHatimIcon />
                    <YeniHatimText>{Language["/cuz"].NewSubKhatm}</YeniHatimText>
                </YeniHatimButton>
    </YeniHatimContainer>)}
    </>
  )
}

export default NewKhatmPart