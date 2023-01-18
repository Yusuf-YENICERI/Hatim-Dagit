






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from '../../backend';
import { useContext } from "react";
import { partsProcessor } from "localStorage/parts";
import { extractKey } from "common";

const initialState = {
    visible: false,
    name: '',
    cuzNo: 0,
    subKey: '',
    loading: false
}


const changeCuz = createAsyncThunk("cuzModal/changeCuz", async ({nameState, cuzNo, subKey})=>{
    const result = await db.cuzIsimDegistir(nameState, cuzNo, subKey);
    if(result == -1) throw new Error("Cuz can't be updated!");
})

const cancelCuz = createAsyncThunk("cuzModal/cancelCuz", async ({ cuzNo, subKey})=>{
    const result = await db.cuzIptal(cuzNo, subKey);
    if(result == -1) throw new Error("Cuz can't be cancelled!");
    else{
        partsProcessor.cancelPart({key: extractKey(), subKey: subKey, partId: cuzNo});
    }
})

const cuzModalSlice = createSlice({
    name: 'cuzModal',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.visible = !state.visible;
        },
        changeName: (state, {payload}) => {
            state.name = payload;
        },
        changeCuzNo: (state, {payload}) => {
            state.cuzNo = payload;
        },
        changeSubKey: (state, {payload}) => {
            state.subKey = payload;
        },
    },
    extraReducers:{
        [changeCuz.pending]: (state) => {
            state.loading = true
        },

        [changeCuz.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
        },
        
        [changeCuz.rejected]: (state) => {
            state.visible = false
            state.loading = false
        },

        [cancelCuz.pending]: (state) => {
            state.loading = true
        },

        [cancelCuz.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
        },
        
        [cancelCuz.rejected]: (state) => {
            state.visible = false
            state.loading = false
        }
    }
})

const actions = cuzModalSlice.actions;


export {actions, changeCuz, cancelCuz}
export default cuzModalSlice.reducer;