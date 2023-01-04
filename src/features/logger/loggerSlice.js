






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorKey : undefined
}

const loggerSlice = createSlice({
    name: 'logger',
    initialState,
    reducers:{
        changeErrorKey: (state, {payload}) => {
            state.errorKey = payload;
        }
    }
})

const actions = loggerSlice.actions;


export {actions}
export default loggerSlice.reducer;