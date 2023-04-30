















import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from '../../backend';
import { useContext } from "react";
import { updateHatim } from "../editCuzlerModal/editCuzlerModalSlice";


const initialState = {
    firstRunMade: false,
    arr: []
}


const hatimlerVisibilitiesSlice = createSlice({
    name: 'hatimlerVisibilities',
    initialState,
    reducers:{
        changeFirstRunMade: (state, {payload}) => {
            state.firstRunMade = payload;
        },
        changeArr: (state, {payload}) => {
            state.arr = payload;
        }
    },
})

const actions = hatimlerVisibilitiesSlice.actions;


export {actions}
export default hatimlerVisibilitiesSlice.reducer;