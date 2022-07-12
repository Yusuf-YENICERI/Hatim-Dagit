




import { useDispatch, useSelector } from 'react-redux';
import cuzlerFunctionTriggerReducer, {actions} from './cuzlerFunctionTriggerSlice';
import { store } from "../../redux/store";

const useCuzlerFunctionTrigger = () => {
    return useSelector(state=>state.cuzlerFunctionTrigger)
}
const cuzlerFunctionTriggerActions = actions;

export {cuzlerFunctionTriggerReducer, useCuzlerFunctionTrigger, cuzlerFunctionTriggerActions};