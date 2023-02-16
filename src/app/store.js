import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './features/darkModeSlice';

import uploadDataReducer from './features/uploadDataSlice'


const reducer={
    darkMode: darkModeReducer,
    
    uploadData: uploadDataReducer

}
export const store=configureStore({
reducer
})

// export const store = configureStore({
//     reducer: {
//         darkMode: darkModeReducer
//     },

   
// });
