import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"




export const getUploadData = createAsyncThunk(
    'uploadData/getUploadData',
    async () => {

        const response = await fetch('https://havenly-s.vercel.app/recentlyUploadedData')
        const format = await response.json();
        // console.log(format)
        return format;
    }

);





export const uploadDataSlice = createSlice({


    name: 'uploadData',
    initialState: {

        poi: [],
        isLoading: false,
    },

    extraReducers: {
        [getUploadData.pending]: (state) => {
            state.isLoading = true;
        },
        [getUploadData.fulfilled]: (state, action) => {
            state.uploadData = action.payload;
            state.isLoading = true;
        },
        [getUploadData.rejected]: (state) => {
            state.isLoading = false;
        },

    },
});

export default uploadDataSlice.reducer;