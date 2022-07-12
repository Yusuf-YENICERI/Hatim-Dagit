




import { useDispatch, useSelector } from 'react-redux';
import notificationReducer, {actions} from './notificationSlice';

const useNotification = () => {
    return useSelector(state=>state.notification)
}
const notificationActions = actions;


export {notificationReducer, useNotification, notificationActions};