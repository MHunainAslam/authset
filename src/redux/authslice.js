import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('api/login', async (credential, { rejectWithValue }) => {
    try {
        const res = await axios.post('https://api.eobusinessclub.com/api/login', credential)
        console.log(res);
        return res.data
    } catch (error) {
        console.log(error, 'asass')
        // return error.data
        return rejectWithValue(error?.response?.data?.message)
    }
})


export const initialState = {
    isauth: false,
    loading: false,
    iserror: null
}

export const loginslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginp: (state, action) => {
            state.isauth = true
        },
        logout: (state) => {
            state.isauth = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.isauth = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.iserror = action.payload
            })

    }
})


export const { loginp, logout } = loginslice.actions
export default loginslice.reducer 