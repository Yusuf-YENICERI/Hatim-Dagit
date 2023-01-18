




import { createSlice } from "@reduxjs/toolkit";
import { hatimsProcessor, ucAylarHatimsProcessor } from "../../localStorage/hatims";


type stateType = {
    componentName: string,
    previousComponentName: string,
    chart: [],
    chartNames: [],
    currentKhatmKey: string,
    subKeysAndParts: {[key: string]: string[]}[],
    currentSubKeyAndPart: {subKey: string, part: string}
}

const initialState: stateType = {
    componentName: 'tumcizelgeler',
    previousComponentName: '',
    chart: [],
    chartNames: [],
    currentKhatmKey: '',
    subKeysAndParts: [],
    currentSubKeyAndPart: {subKey: '', part: ''}
}

const cizelgelerimSlice = createSlice({
    name: 'cizelgelerim',
    initialState,
    reducers:{
        changeComponentName: (state, {payload}) => {
            state.previousComponentName = state.componentName;
            state.componentName = payload;
        },
        changePreviousComponentName: (state, {payload}) => {
            state.previousComponentName = payload;
        },
        changeCizelgeler: (state, {payload}) => {
            state.chart = payload;
        },
        changeChartNames: (state, {payload}) => {
            state.chartNames = payload;
        },
        changeCurrentKhatmKey: (state, {payload}) => {
            state.currentKhatmKey = payload;
        },
        changeSubKeysAndParts: (state, {payload}) => {
            state.subKeysAndParts = payload
        },
        changeCurrentSubKeyAndPart: (state, {payload}) => {
            state.currentSubKeyAndPart = payload
        },
    },
})

const actions = cizelgelerimSlice.actions;


export {actions}
export default cizelgelerimSlice.reducer;