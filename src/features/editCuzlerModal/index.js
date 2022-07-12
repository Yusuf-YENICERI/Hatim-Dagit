




import { useDispatch, useSelector } from 'react-redux';
import editModalCuzlerReducer, {actions, updateHatim} from './editCuzlerModalSlice';
import { store } from "../../redux/store";

const useEditCuzlerModal = () => {
    return useSelector(state=>state.editModalCuzler)
}
const editModalCuzlerActions = actions;
const editModalCuzlerFunctions = {updateHatim}

export {editModalCuzlerReducer, useEditCuzlerModal, editModalCuzlerActions, editModalCuzlerFunctions};