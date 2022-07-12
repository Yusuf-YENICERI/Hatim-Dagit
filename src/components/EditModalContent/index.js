






import React, {useState} from 'react';
import { Button, createStyles, Select, Group, TextInput, Indicator, Notification, Textarea } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import 'dayjs/locale/tr';
import { editModalCuzlerActions, editModalCuzlerFunctions, useEditCuzlerModal } from '../../features/editCuzlerModal';
import { useDispatch } from 'react-redux';
import { Loader } from 'tabler-icons-react';
import { useForm } from '@mantine/form';
import { cuzlerFunctionTriggerActions } from '../../features/cuzlerFunctionTrigger';
import Language from "../../strings";


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
  const {subKey} = props;
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const {visible, header, description, date, loading} = useEditCuzlerModal();
  let arrLeftDays = date.replaceAll("/","-").split("-").reverse();
  let _date = new Date(arrLeftDays[0], parseInt(arrLeftDays[1])-1, arrLeftDays[2])
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState(_date)
  const form = useForm({initialValues: {header, description, _date}})

  return (
    <div style={{height: '100%'}}>
      <TextInput label={Language["/cuz"].CuzlerHatimCard.Modal.Header} value={form.values.header} onChange={(e)=>form.setFieldValue("header", e.currentTarget.value)} classNames={classes} />
      <Textarea mt="20px" label={Language["/cuz"].CuzlerHatimCard.Modal.Description} value={form.values.description} onChange={(e)=>form.setFieldValue("description", e.currentTarget.value)} classNames={classes} />


      <DatePicker
        style={{ marginTop: 20 }}
        locale="tr"
        label={Language["/cuz"].CuzlerHatimCard.Modal.Date}
        classNames={classes}
        clearable={false}
        dropdownType="modal"
        value={dateValue}
        onChange={setDateValue}
      />


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
            <Button mt="20px" onClick={async ()=>{
            await dispatch(editModalCuzlerFunctions.updateHatim({form, dateValue, subKey}))
        }} >{Language["/cuz"].CuzlerHatimCard.Modal.Button}</Button>
        }
        </Group>
    </div>
  );
}