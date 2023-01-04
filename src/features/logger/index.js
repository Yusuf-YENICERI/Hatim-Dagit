




import { useDispatch, useSelector } from 'react-redux';
import loggerReducer, {actions} from './loggerSlice';

const useLogger = () => {
    return useSelector(state=>state.logger)
}
const loggerActions = actions;


export {loggerReducer, useLogger, loggerActions};