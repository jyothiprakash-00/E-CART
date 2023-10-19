import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore({
    reducer:{
        wishlistreducer:wishlistSlice

    }
})

export default store