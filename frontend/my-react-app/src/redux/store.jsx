import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';  // Importer le slice du auth
import popupReducer from './popupSlice';  // Importer le slice du popup

const store = configureStore({
    reducer: {
        auth: authReducer,
        popup: popupReducer, 
    }
});

export default store;