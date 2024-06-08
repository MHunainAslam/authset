import { configureStore } from "@reduxjs/toolkit";
import  loginslice  from "./authslice";

export const store = configureStore({
    reducer: {
        login: loginslice
    }
})