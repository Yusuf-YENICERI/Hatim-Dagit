




import { useDispatch, useSelector } from 'react-redux';
import cuzModalReducer, {actions, changeCuz, cancelCuz} from './cuzModalSlice';
import { store } from "../../redux/store";

const useCuzModal = () => {
    return useSelector(state=>state.cuzModal)
}
const cuzModalActions = actions;
const cuzModalFunctions = {changeCuz, cancelCuz}

export {cuzModalReducer, useCuzModal, cuzModalActions, cuzModalFunctions};