






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from '../../backend';
import { useContext } from "react";

const initialState = {
    visible: false,
}

const loadingOverlaySlice = createSlice({
    name: 'loadingOverlay',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.visible = !state.visible;
        },    
    },
})

const actions = loadingOverlaySlice.actions;


export {actions}
export default loadingOverlaySlice.reducer;