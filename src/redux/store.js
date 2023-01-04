





import { configureStore } from "@reduxjs/toolkit";
import { cuzlerFunctionTriggerReducer } from "../features/cuzlerFunctionTrigger";
import { cuzModalReducer } from "../features/cuzModal";
import { editModalCuzlerReducer } from "../features/editCuzlerModal";
import { notificationReducer } from "../features/notification";
import {loggerReducer} from "../features/logger"
import { yesNoDialogAlertReducer } from "../features/yesNoDialogAlert";

export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        cuzlerFunctionTrigger: cuzlerFunctionTriggerReducer,
        editModalCuzler: editModalCuzlerReducer,
        yesNoDialogAlert: yesNoDialogAlertReducer,
        cuzModal: cuzModalReducer,
        logger: loggerReducer
    }
})