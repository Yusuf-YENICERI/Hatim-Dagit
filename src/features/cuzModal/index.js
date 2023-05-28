




import { useDispatch, useSelector } from 'react-redux';
import cuzModalReducer, {actions, changeCuz, cancelCuz, changeCuzV3, cancelCuzV3, takeCuzV3} from './cuzModalSlice';
import { store } from "../../redux/store";

const useCuzModal = () => {
    return useSelector(state=>state.cuzModal)
}
const cuzModalActions = actions;
const cuzModalFunctions = {changeCuz, cancelCuz, changeCuzV3, cancelCuzV3, takeCuzV3}

export {cuzModalReducer, useCuzModal, cuzModalActions, cuzModalFunctions};