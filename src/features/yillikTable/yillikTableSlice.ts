






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: true,
    subKey: '',
    partNo: 1,
}

const yillikTableSlice = createSlice({
    name: 'yillikTable',
    initialState,
    reducers:{
        changeVisibility: (state, {payload}) => {
            state.visible = payload;
        },
        changeSubKey: (state, {payload}) => {
            state.subKey = payload;
        },
        changePartNo: (state, {payload}) => {
            state.partNo = payload;
        },
    }
})

const actions = yillikTableSlice.actions;


export {actions}
export default yillikTableSlice.reducer;