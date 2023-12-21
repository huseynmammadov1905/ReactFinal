
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice"
import myBagReducer from "../features/myBagSlice"

export const store = configureStore({
    reducer : {
        productReducer,
        myBagReducer,
    }   
});