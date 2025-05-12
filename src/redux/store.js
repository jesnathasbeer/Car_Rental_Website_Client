import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import adminReducer from "./features/userSlice";

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        user: userReducer,
    },

});