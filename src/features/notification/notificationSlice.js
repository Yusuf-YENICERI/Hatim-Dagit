






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    barVisible: false,
    text: '',
    icon: null
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        toggleVisibility: state => {
            state.barVisible = !state.barVisible;
        },
        changeText: (state, {payload}) => {
            state.text = payload;
        },
        changeIcon: (state, {payload}) => {
            state.text = payload;
        },
    }
})

const actions = notificationSlice.actions;


export {actions}
export default notificationSlice.reducer;