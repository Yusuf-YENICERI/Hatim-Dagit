






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from '../../backend';
import { useContext } from "react";

const initialState = {
    visible: false,
}

const alertDialogSlice = createSlice({
    name: 'alertDialog',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.visible = !state.visible;
        },    
    },
})

const actions = alertDialogSlice.actions;


export {actions}
export default alertDialogSlice.reducer;