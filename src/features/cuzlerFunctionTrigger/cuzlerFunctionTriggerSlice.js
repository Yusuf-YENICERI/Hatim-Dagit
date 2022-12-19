






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from '../../backend';
import { useContext } from "react";
import { updateHatim } from "../editCuzlerModal/editCuzlerModalSlice";

const initialState = {
    visible: false,
}


const cuzlerFunctionTriggerSlice = createSlice({
    name: 'cuzlerFunctionTrigger',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.visible = !state.visible;
        }
    },
    extraReducers:{
        [updateHatim.fulfilled]: (state, {payload}) => {
            state.visible = true
        }
    }
})

const actions = cuzlerFunctionTriggerSlice.actions;


export {actions}
export default cuzlerFunctionTriggerSlice.reducer;