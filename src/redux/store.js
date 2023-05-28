





import { configureStore } from "@reduxjs/toolkit";
import { cuzlerFunctionTriggerReducer } from "../features/cuzlerFunctionTrigger";
import { cuzModalReducer } from "../features/cuzModal";
import { editModalCuzlerReducer } from "../features/editCuzlerModal";
import { notificationReducer } from "../features/notification";
import {loggerReducer} from "../features/logger"
import { yesNoDialogAlertReducer } from "../features/yesNoDialogAlert";
import { alertDialogReducer } from "../features/alertDialog";
import { cizelgelerimReducer } from "features/cizelgelerim";
import { hatimlerVisibilitiesReducer } from "features/hatimlerVisibilities";
import { yillikTableReducer } from "features/yillikTable";

export const store = configureStore({
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
        yillikTable: yillikTableReducer
    }
})