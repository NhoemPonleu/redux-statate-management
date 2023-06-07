// create store for Redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product/productSlice'
import cartSlice from './cart/cartSlice'


export const store = configureStore({
    reducer: {
        // add reducers here
        products: productSlice,
        cart: cartSlice

    }
})