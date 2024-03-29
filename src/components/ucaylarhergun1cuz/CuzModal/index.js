






import React, {useState, useEffect} from 'react';
import { Button, createStyles, Select, Group, TextInput, Indicator, Notification, Textarea, Modal } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import 'dayjs/locale/tr';
import { cuzModalActions, cuzModalFunctions, useCuzModal } from '../../../features/cuzModal';
import { useDispatch } from 'react-redux';
import { Loader } from 'tabler-icons-react';
import { useForm } from '@mantine/form';
import { cuzlerFunctionTriggerActions } from '../../../features/cuzlerFunctionTrigger';
import Language from '../../../strings'

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export default function ContainedInputs(props) {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const {visible, name, cuzNo, subKey, loading } = useCuzModal();
  const [nameState, setNameState] = useState(name)
  const dispatch = useDispatch();

  

  return (

    <div style={{height: '100%'}}>
      <TextInput label={Language["/cuz"].CuzlerHatimCard.PartModal.Name} value={nameState} onChange={(e)=>setNameState(e.currentTarget.value)} classNames={classes} />



      <Group position="center">
        {  loading ?
        <Notification mt="20px"
        loading
        title={Language["/cuz"].CuzlerHatimCard.Notification.Title}
        disallowClose
      >
        {Language["/cuz"].CuzlerHatimCard.Notification.Description}
      </Notification>
        :
        <>
            <Button mt="20px" onClick={async ()=>{
            await dispatch(cuzModalFunctions.changeCuz({nameState, cuzNo, subKey}))
            dispatch(cuzlerFunctionTriggerActions.toggleVisibility())
        }} >{Language["/cuz"].CuzlerHatimCard.PartModal.ChangeNameButton}</Button>

            <Button id="cancelPart" color="red" mt="20px" onClick={async ()=>{
            await dispatch(cuzModalFunctions.cancelCuz({cuzNo, subKey}))
            dispatch(cuzlerFunctionTriggerActions.toggleVisibility())
          }} >{Language["/cuz"].CuzlerHatimCard.PartModal.CancelPart}</Button>
        </>

        }
        </Group>
    </div>
  );
}