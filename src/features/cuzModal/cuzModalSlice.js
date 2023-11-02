






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db, localDatabase} from '../../backend';
import { useContext } from "react";
import { partsProcessor } from "localStorage/parts";
import { extractKey } from "common";

const initialState = {
    visible: false,
    name: '',
    cuzNo: 0,
    subKey: '',
    loading: false,
    takingPart: true,
    makeNewKhatm: false,
    partsFull: false 
}


const changeCuz = createAsyncThunk("cuzModal/changeCuz", async ({nameState, cuzNo, subKey})=>{
    const result = await db.cuzIsimDegistir(nameState, cuzNo, subKey);
    if(result == -1) throw new Error("Cuz can't be updated!");
})

const cancelCuz = createAsyncThunk("cuzModal/cancelCuz", async ({ cuzNo, subKey, partsFull = false})=>{
    let result = undefined
    if(partsFull){
        result = await db.cuzIptalTasarruflu(cuzNo, subKey, partsFull);
    }else{
        result = await db.cuzIptal(cuzNo, subKey);
    }
    if(result == -1) throw new Error("Cuz can't be cancelled!");
    else{
        partsProcessor.cancelPart({key: extractKey(), subKey: subKey, partId: cuzNo});
    }
})

const takeCuzV3 = createAsyncThunk("cuzModal/takeCuzV3", async ({nameState, cuzNo, subKey}, {getState})=>{
    const makeNewKhatm = getState().cuzModal.makeNewKhatm;
    const {data, error} = await db.cuzAlV3(nameState, cuzNo, subKey, true, makeNewKhatm);
    if(data == 200){
        let {data, error} = localDatabase.cuzAl(nameState, cuzNo, subKey, true, makeNewKhatm);
        if(data == undefined){
            alert('Cüz bilgileri cihazınıza kaydedilemedi ancak Cüz alındı!')
        }
    }
    else{
        alert("Cüz alınamadı! Bir başkası tarafından alınmış ya da internet bağlantısı koptu!");
    }
})

const changeCuzV3 = createAsyncThunk("cuzModal/changeCuzV3", async ({nameState, cuzNo, subKey})=>{
    const {data, error} = await db.cuzIsimDegistirV3(nameState, cuzNo, subKey);
    if(data == 200) {
        let {data, error} = localDatabase.cuzIsimDegistir(nameState, cuzNo, subKey);
        if(data == undefined){
            alert('Cüz bilgileri cihazınıza kaydedilemedi ancak Cüz alındı!')
        }
    }
    else{
        alert("Cüz güncellenemedi!");
    }
})

const cancelCuzV3 = createAsyncThunk("cuzModal/cancelCuzV3", async ({ cuzNo, subKey})=>{
    const result = await db.cuzIptalV3(cuzNo, subKey);
    if(result.data == 200) {
        const {data, error} = localDatabase.cuzIptal(cuzNo, subKey);
        if(data == undefined){
            alert('Cüz bilgileri cihazınıza kaydedilemedi ancak Cüz iptal edildi!')
        }
    }
    else{
        alert("Cüz iptal edilemedi!");
    }
})

const cuzModalSlice = createSlice({
    name: 'cuzModal',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.visible = !state.visible;
        },
        changePartsFull: (state, {payload}) => {
            state.partsFull = payload;
        },
        changeMakeNewKhatm: (state, {payload}) => {
            state.makeNewKhatm = payload;
        },
        changeTakingPart: (state, {payload}) => {
            state.takingPart = payload;
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
        },

        [changeCuzV3.pending]: (state) => {
            state.loading = true
        },

        [changeCuzV3.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
        },
        
        [changeCuzV3.rejected]: (state) => {
            state.visible = false
            state.loading = false
        },

        [cancelCuzV3.pending]: (state) => {
            state.loading = true
        },

        [cancelCuzV3.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
        },
        
        [cancelCuzV3.rejected]: (state) => {
            state.visible = false
            state.loading = false
        },

        [takeCuzV3.pending]: (state) => {
            state.loading = true
        },

        [takeCuzV3.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
        },
        
        [takeCuzV3.rejected]: (state) => {
            state.visible = false
            state.loading = false
        }
    }
})

const actions = cuzModalSlice.actions;


export {actions, changeCuz, cancelCuz, changeCuzV3, cancelCuzV3, takeCuzV3}
export default cuzModalSlice.reducer;