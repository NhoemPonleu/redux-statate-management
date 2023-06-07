import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    total: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, name, price, quantity, image, description } = action.payload
            const existingItem = state.cart.find(item => item.id === id) 
            {
                state.cart.push({ id, name, price, quantity, image, description })
            }
        },
        increaseQuantity(state, action) {
            const { id, price } = action.payload
            const existingItem = state.cart.find(item => item.id === id)
            if (existingItem) {
                existingItem.quantity++
            }
        },
        decreaseQuantity(state, action) {
            const { id, price } = action.payload
            const existingItem = state.cart.find(item => item.id === id)
            if (existingItem) {
                existingItem.quantity--
            }
            if (existingItem.quantity === 0) {
                state.cart = state.cart.filter(item => item.id !== id)
            }
        }

    }
})
export const { addToCart, decreaseQuantity, increaseQuantity } = cartSlice.actions
export default cartSlice.reducer
export const selectCart = state => state.cart.cart
export const selectTotal = state => state.cart.total
