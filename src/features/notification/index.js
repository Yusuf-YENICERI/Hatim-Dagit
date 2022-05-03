




import { useDispatch, useSelector } from 'react-redux';
import notificationReducer, {actions} from './notificationSlice';
import { store } from "../../redux/store";

const useNotification = () => {
    return useSelector(state=>state.notification)
}
const notificationActions = actions;


export {notificationReducer, useNotification, notificationActions};