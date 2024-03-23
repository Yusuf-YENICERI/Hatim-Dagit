import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {db} from '../../backend';

const initialState = {
  visible: false,
  subKey: '',
  partNo: 0,
  isRead: false,
};

const partRead = createAsyncThunk (
  'isReadDialogAlert/partRead',
  async ({subKey, partNo}:{subKey: string, partNo: number}) => {
    const result = await db.partRead ({subKey, partNo});
    if (result.data == undefined) {
      throw new Error (result.error);
    }
  }
);

const partNotRead = createAsyncThunk (
  'isReadDialogAlert/partRead',
  async ({subKey, partNo}:{subKey: string, partNo: number}) => {
    const result = await db.partNotRead ({subKey, partNo});
    if (result.data == undefined) {
      throw new Error (result.error);
    }
  }
);

const isReadDialogAlertSlice = createSlice ({
  name: 'isReadDialogAlert',
  initialState,
  reducers: {
    toggleVisibility: state => {
      state.visible = !state.visible;
    },
    changeSubKey: (state, {payload}) => {
      state.subKey = payload;
    },
    changePartNo: (state, {payload}) => {
      state.partNo = payload;
    },
    changeIsRead: (state, {payload}) => {
      state.isRead = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(partRead.fulfilled, (state: {visible: boolean}) => {
      state.visible = false;
    })
    builder.addCase(partRead.rejected, (state: {visible: boolean}) => {
      state.visible = true;
    })
  },
});

const actions = isReadDialogAlertSlice.actions;

export {actions, partRead, partNotRead};
export default isReadDialogAlertSlice.reducer;
