









import { Modal } from '@mantine/core'
import CuzlerHatimCard from 'components/cuz/CuzlerHatimCard';
import EditModalContent from 'components/cuz/EditModalContent'
import { editModalCuzlerActions, useEditCuzlerModal } from 'features/editCuzlerModal';
import { useDispatch } from 'react-redux';
import Language from 'strings';


const Banner = () => {

    const editCuzlerModal = useEditCuzlerModal();
    const dispatch = useDispatch();

  return (
    <>
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

        {/* <CuzlerHatimCard header={Language.baslik} description={Language.description}
                            progress={totalPartsTaken/(allLanguage.length*30)*100} leftCuzs={allLanguage.length*30-totalPartsTaken}
                            duaLeftDays={Language.bitisTarihi.split("-").reverse().join("/")}
                            yesHandler={yesHandlerState} toggleYesHandler={toggleYesHandlerState}
                            noHandler={noHandlerState} toggleNoHandler={toggleNoHandlerState}

        ></CuzlerHatimCard> */}
    </>
  )
}

export default Banner