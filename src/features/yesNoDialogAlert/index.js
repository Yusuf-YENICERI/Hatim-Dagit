




import { useDispatch, useSelector } from 'react-redux';
import yesNoDialogAlertReducer, {actions, deleteHatim} from './yesNoDialogAlertSlice';

const useYesNoDialogAlert = () => {
    return useSelector(state=>state.yesNoDialogAlert)
}
const yesNoDialogAlertActions = actions;
const yesNoDialogAlertFunctions = {deleteHatim};

export {yesNoDialogAlertReducer, useYesNoDialogAlert, yesNoDialogAlertActions, yesNoDialogAlertFunctions};