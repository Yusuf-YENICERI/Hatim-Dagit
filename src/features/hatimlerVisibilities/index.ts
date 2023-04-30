




import { useDispatch, useSelector } from 'react-redux';
import hatimlerVisibilitiesReducer, {actions} from './hatimlerVisibilitiesSlice';
import { store } from "../../redux/store";

const useHatimlerVisibilitiesSelector = () => {
    return useSelector((state:any)=>state.hatimlerVisibilities)
}

const hatimlerVisibilitiesActions = actions;

export {hatimlerVisibilitiesReducer, useHatimlerVisibilitiesSelector, hatimlerVisibilitiesActions};