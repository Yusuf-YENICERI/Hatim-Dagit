




import { useDispatch, useSelector } from 'react-redux';
import yillikTableReducer, {actions} from './yillikTableSlice';

const useYillikTable = () => {
    return useSelector((state:any)=>state.yillikTable)
}
const yillikTableActions = actions;


export {yillikTableReducer, useYillikTable, yillikTableActions};