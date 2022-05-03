





import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "../features/notification";

export const store = configureStore({
    reducer: {
        notification: notificationReducer
    }
})