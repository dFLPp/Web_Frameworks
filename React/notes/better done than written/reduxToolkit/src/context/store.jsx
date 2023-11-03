import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import modalReducer from '../features/modal/modalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal:  modalReducer
    }
}) 

//O nome do method é condigureStore mas o nome 'store' é opcional (eu acho)