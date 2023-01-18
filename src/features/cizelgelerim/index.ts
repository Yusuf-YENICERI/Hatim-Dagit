




import { useSelector } from 'react-redux';
import cizelgelerimReducer, {actions} from './cizelgelerimSlice';
import { store } from "../../redux/store";

const useCizelgelerim = () => {
    return useSelector((state:any)=>state.cizelgelerim)
}
const cizelgelerimActions = actions;

export {cizelgelerimReducer, useCizelgelerim, cizelgelerimActions};