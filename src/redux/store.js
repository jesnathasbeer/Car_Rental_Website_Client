import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import adminReducer from "./features/adminSlice";

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        user: userReducer,
    },

});