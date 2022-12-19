






import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {db} from '../../backend';

const initialState = {
    visible: false,
    text: '',
}

const deleteHatim = createAsyncThunk("yesNoDialogAlert/deleteHatim" ,async ()=>{
    const result = await db.deleteHatim();
    if(result == -1){
        throw new Error("Hatim can't be deleted!")
    }
})


const yesNoDialogAlertSlice = createSlice({
    name: 'yesNoDialogAlert',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.visible = !state.visible;
        },
        changeText: (state, {payload}) => {
            state.text = payload;
        },
    },
    extraReducers:{
        [deleteHatim.fulfilled]: (state) => {
            state.visible = false;
        },
        [deleteHatim.rejected]: (state) => {
            state.visible = false;
        }
    }
})

const actions = yesNoDialogAlertSlice.actions;


export {actions, deleteHatim}
export default yesNoDialogAlertSlice.reducer;