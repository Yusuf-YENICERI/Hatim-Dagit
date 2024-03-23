import {useDispatch, useSelector} from 'react-redux';
import isReadDialogAlertReducer, {
  actions,
  partRead,
  partNotRead,
} from './isReadDialogAlertSlice';

const useIsReadDialogAlert = () => {
  return useSelector (state => state.isReadDialogAlert);
};
const isReadDialogAlertActions = actions;
const isReadDialogAlertFunctions = {
  partRead,
  partNotRead,
};

export {
  isReadDialogAlertReducer,
  useIsReadDialogAlert,
  isReadDialogAlertActions,
  isReadDialogAlertFunctions,
};
