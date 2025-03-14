import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: 'auth',
    initialState: {
        user: {
            firstName: null,
            lastName: null,
            email: null
        },
        token: null
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: state => {
            state.token = null;
            state.user = {
                firstName: null,
                lastName: null,
                email: null
            };
        }
    }
});

export const {
    setUser,
    setToken,
    logout
} = auth.actions;

export default auth.reducer;