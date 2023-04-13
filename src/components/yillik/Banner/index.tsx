









import { Modal } from '@mantine/core'
import { DataServiceContext } from 'backend';
import { HatimType } from 'backend/types/HatimType';
import { BaseResponse } from 'backend/types/responses/BaseResponse';
import { HatimGetirCustomResponse } from 'backend/types/responses/HatimGetirCustomResponse';
import { objectToArrayV3 } from 'common';
import CuzlerHatimCard from './CuzlerHatimCard';
import EditModalContent from 'components/cuz/EditModalContent'
import { editModalCuzlerActions, useEditCuzlerModal } from 'features/editCuzlerModal';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Language from 'strings';
import YesNoDialog from './YesNoDialog';

const Banner = ({hatimRootData}: {hatimRootData:HatimGetirCustomResponse|undefined}) => {

    const editCuzlerModal = useEditCuzlerModal();
    const dispatch = useDispatch();

    const dataService = useContext( DataServiceContext );


    const [hatimsData, setHatimsData] = useState<HatimType[]|undefined>(undefined)
    const [totalPartsTaken, setTotalPartsTaken] = useState(0);
    const [yesHandlerState, setYesHandlerState] = useState()
    const [noHandlerState, setNoHandlerState] = useState()

    const toggleYesHandlerState = (payload:any) => {
        setYesHandlerState(()=>payload)
    }

    const toggleNoHandlerState = (payload:any) => {
        setNoHandlerState(()=>payload)
    }

    const preprocessData = () => {
      const result = objectToArrayV3(hatimRootData);
      setHatimsData(result);

      if(hatimsData != undefined){
      let dataResult = dataService.countNumberOfCuzs(hatimsData);
      if(dataResult.data !== undefined){
        setTotalPartsTaken(dataResult.data);
      }
      }
    }

    useEffect(()=>{
      if(hatimRootData != undefined){
      preprocessData();
      }
    },[hatimRootData])


  if(hatimRootData == undefined || hatimsData == undefined){
    return <></>
  }

  return (
    <>


        {/**Hatim silme */}
        <YesNoDialog yesHandler={yesHandlerState} noHandler={noHandlerState} />


        {/** Hatim editleme*/}
        <Modal
        styles={{
            root: {height: '100%'},
            inner: {height: '100%'},
            body: {height: '100%'},

        }}
        opened={editCuzlerModal.visible}
        onClose={() => dispatch(editModalCuzlerActions.toggleVisibility())}
        title={Language["/cuz"].CuzlerHatimCard.Modal.Title}
        >
            <EditModalContent subKey={""}></EditModalContent>
        </Modal>

         <CuzlerHatimCard header={hatimRootData?.header} description={hatimRootData?.description}
                            progress={totalPartsTaken/(hatimsData.length*30)*100} leftCuzs={hatimsData.length*30-totalPartsTaken}
                            duaLeftDays={hatimRootData.startingDate?.split("-").reverse().join("/")}
                            yesHandler={yesHandlerState} toggleYesHandler={toggleYesHandlerState}
                            noHandler={noHandlerState} toggleNoHandler={toggleNoHandlerState}

        ></CuzlerHatimCard> 
    </>
  )
}

export default Banner