




import { useDispatch, useSelector } from 'react-redux';
import alertDialogReducer, {actions} from './alertDialogSlice';
import { store } from "../../redux/store";

const useAlertDialog = () => {
    return useSelector(state=>state.alertDialog)
}
const alertDialogActions = actions;

export {alertDialogReducer, useAlertDialog, alertDialogActions};