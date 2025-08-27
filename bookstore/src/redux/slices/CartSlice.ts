import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../types/Book";

interface CartState {
    cartItems: Book[],
}

const initialState:CartState = {
    cartItems: [],
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action:PayloadAction<Book>) {
            state.cartItems.push(action.payload)
        },
        clearAll(state) {
            state.cartItems = []
        }
    }
})

export const { addCartItem, clearAll } = CartSlice.actions
export default CartSlice.reducer