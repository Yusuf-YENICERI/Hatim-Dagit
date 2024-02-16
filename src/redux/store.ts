import {configureStore} from '@reduxjs/toolkit';
import {cuzlerFunctionTriggerReducer} from '../features/cuzlerFunctionTrigger';
import {cuzModalReducer} from '../features/cuzModal';
import {editModalCuzlerReducer} from '../features/editCuzlerModal';
import {notificationReducer} from '../features/notification';
import {loggerReducer} from '../features/logger';
import {yesNoDialogAlertReducer} from '../features/yesNoDialogAlert';
import {alertDialogReducer} from '../features/alertDialog';
import {cizelgelerimReducer} from 'features/cizelgelerim';
import {hatimlerVisibilitiesReducer} from 'features/hatimlerVisibilities';
import {yillikTableReducer} from 'features/yillikTable';
import {loadingOverlayReducer} from 'features/loadingOverlay';
import {isReadDialogAlertReducer} from 'features/isReadDialogAlert';

export const store = configureStore ({
  reducer: {
    notification: notificationReducer,
    cuzlerFunctionTrigger: cuzlerFunctionTriggerReducer,
    editModalCuzler: editModalCuzlerReducer,
    yesNoDialogAlert: yesNoDialogAlertReducer,
    cuzModal: cuzModalReducer,
    logger: loggerReducer,
    alertDialog: alertDialogReducer,
    cizelgelerim: cizelgelerimReducer,
    hatimlerVisibilities: hatimlerVisibilitiesReducer,
    yillikTable: yillikTableReducer,
    loadingOverlay: loadingOverlayReducer,
    isReadDialogAlert: isReadDialogAlertReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch