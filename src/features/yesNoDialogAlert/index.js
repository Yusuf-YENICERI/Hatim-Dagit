




import { useDispatch, useSelector } from 'react-redux';
import yesNoDialogAlertReducer, {actions, deleteHatim, deleteHatimV3} from './yesNoDialogAlertSlice';

const useYesNoDialogAlert = () => {
    return useSelector(state=>state.yesNoDialogAlert)
}
const yesNoDialogAlertActions = actions;
const yesNoDialogAlertFunctions = {deleteHatim, deleteHatimV3};

export {yesNoDialogAlertReducer, useYesNoDialogAlert, yesNoDialogAlertActions, yesNoDialogAlertFunctions};