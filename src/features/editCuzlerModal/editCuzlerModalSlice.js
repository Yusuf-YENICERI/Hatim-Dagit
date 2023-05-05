






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from '../../backend';
import { useContext } from "react";
import { cancelCuzV3, changeCuzV3, takeCuzV3 } from "features/cuzModal/cuzModalSlice";
import { newYearlyKhatmV3 } from "features/yesNoDialogAlert/yesNoDialogAlertSlice";

const initialState = {
    visible: false,
    header: '',
    description: '',
    date: '',
    loading: false,
    refetchData: false,
}


const updateHatim = createAsyncThunk("editCuzlerModal/updateHatim", async ({form, dateValue, subKey})=>{
    const {header, description} = form.values;
    const formattedDate = `${dateValue.getFullYear()}-${(dateValue.getMonth()+1).toString().padStart(2,0)}-${dateValue.getDate().toString().padStart(2,0)}`
    const result = await db.hatimDegistir(header, formattedDate, description, subKey);
    if(result == -1) throw new Error("Hatim can't be updated!");
})

const updateHatimV3 = createAsyncThunk("editCuzlerModal/updateHatimV3", async ({form, dateValue, subKey})=>{
    const {header, description} = form.values;
    const formattedDate = `${dateValue.getFullYear()}-${(dateValue.getMonth()+1).toString().padStart(2,0)}-${dateValue.getDate().toString().padStart(2,0)}`
    const result = await db.hatimDegistirV3(header, formattedDate, description, subKey);
    if(result == -1) throw new Error("Hatim can't be updated!");
})

const yearlyUpdateHatimV3 = createAsyncThunk("editCuzlerModal/yearlyUpdateHatimV3", async ({form, dateValue, subKey})=>{
    const {header, description} = form.values;
    const formattedDate = `${dateValue.getFullYear()}-${(dateValue.getMonth()+1).toString().padStart(2,0)}-${dateValue.getDate().toString().padStart(2,0)}`
    const result = await db.yillikHatimDegistirV3(header, formattedDate, description, subKey);
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

        triggerRefetchData: (state) => {
            state.refetchData = !state.refetchData;
        }
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
        },
        [updateHatimV3.pending]: (state) => {
            state.loading = true
        },

        [updateHatimV3.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
        },
        
        [updateHatimV3.rejected]: (state) => {
            state.visible = false
            state.loading = false
        },
        [yearlyUpdateHatimV3.pending]: (state) => {
            state.loading = true
        },

        [yearlyUpdateHatimV3.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.visible = false
            state.refetchData = !state.refetchData
        },
        
        [yearlyUpdateHatimV3.rejected]: (state) => {
            state.visible = false
            state.loading = false
        },

        [changeCuzV3.pending]: (state) => {
            state.refetchData = !state.refetchData
        },

        [changeCuzV3.fulfilled]: (state, {payload}) => {
            state.refetchData = !state.refetchData
        },
        
        [changeCuzV3.rejected]: (state) => {
            state.refetchData = !state.refetchData
        },

        [cancelCuzV3.pending]: (state) => {
            state.refetchData = !state.refetchData
        },

        [cancelCuzV3.fulfilled]: (state, {payload}) => {
            state.refetchData = !state.refetchData
        },
        
        [cancelCuzV3.rejected]: (state) => {
            state.refetchData = !state.refetchData
        },

        [takeCuzV3.pending]: (state) => {
            state.refetchData = !state.refetchData
        },

        [takeCuzV3.fulfilled]: (state, {payload}) => {
            state.refetchData = !state.refetchData
        },
        
        [takeCuzV3.rejected]: (state) => {
            state.refetchData = !state.refetchData
        },

        [newYearlyKhatmV3.pending]: (state) => {
            state.refetchData = !state.refetchData
        },

        [newYearlyKhatmV3.fulfilled]: (state, {payload}) => {
            state.refetchData = !state.refetchData
        },
        
        [newYearlyKhatmV3.rejected]: (state) => {
            state.refetchData = !state.refetchData
        }

    }
})

const actions = editCuzlerModalSlice.actions;


export {actions, updateHatim, updateHatimV3, yearlyUpdateHatimV3}
export default editCuzlerModalSlice.reducer;