import { createSlice } from "@reduxjs/toolkit";

const popup = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
    },

    reducers: {
        openPopup: (state) => {
            state.isOpen = true;
        },
        closePopup: (state) => {
            state.isOpen = false;
        },
    },
});

export const { 
    openPopup,
    closePopup
} = popup.actions;

export default popup.reducer;