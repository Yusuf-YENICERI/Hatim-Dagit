




import { useDispatch, useSelector } from 'react-redux';
import editModalCuzlerReducer, {actions, updateHatim, updateHatimV3, yearlyUpdateHatimV3} from './editCuzlerModalSlice';
import { store } from "../../redux/store";

const useEditCuzlerModal = () => {
    return useSelector(state=>state.editModalCuzler)
}
const editModalCuzlerActions = actions;
const editModalCuzlerFunctions = {updateHatim, updateHatimV3, yearlyUpdateHatimV3}

export {editModalCuzlerReducer, useEditCuzlerModal, editModalCuzlerActions, editModalCuzlerFunctions};