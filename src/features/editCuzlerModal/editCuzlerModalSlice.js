






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from '../../backend';
import { useContext } from "react";

const initialState = {
    visible: false,
    header: '',
    description: '',
    date: '',
    loading: false
}


const updateHatim = createAsyncThunk("editCuzlerModal/updateHatim", async ({form, dateValue, subKey})=>{
    const {header, description} = form.values;
    const formattedDate = `${dateValue.getFullYear()}-${(dateValue.getMonth()+1).toString().padStart(2,0)}-${dateValue.getDate().toString().padStart(2,0)}`
    const result = await db.hatimDegistir(header, formattedDate, description, subKey);
    if(result == -1) throw new Error("Hatim can't be updated!");
})

// const updateHatimAndCuzler = (params) => async dispatch => {
//     await dispatch(updateHatim(params))
//     dispatch(toggleVisibility())
// }

const editCuzlerModalSlice = createSlice({
    name: 'editCuzlerModal',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.visible = !state.visible;
        },
        changeHeader: (state, {payload}) => {
            state.header = payload;
        },
        changeDescription: (state, {payload}) => {
            state.description = payload;
        },
        changeDate: (state, {payload}) => {
            state.date = payload;
        },
    },
    extraReducers:{
        [updateHatim.pending]: (state) => {
            state.loading = true
        },

        [updateHatim.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
        },
        
        [updateHatim.rejected]: (state) => {
            state.visible = false
            state.loading = false
        }
    }
})

const actions = editCuzlerModalSlice.actions;


export {actions, updateHatim}
export default editCuzlerModalSlice.reducer;