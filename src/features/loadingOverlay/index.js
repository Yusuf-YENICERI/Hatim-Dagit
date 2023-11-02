




import { useDispatch, useSelector } from 'react-redux';
import loadingOverlayReducer, {actions} from './loadingOverlaySlice';
import { store } from "../../redux/store";

const useLoadingOverlay = () => {
    return useSelector(state=>state.loadingOverlay)
}
const loadingOverlayActions = actions;

export {loadingOverlayReducer, useLoadingOverlay, loadingOverlayActions};