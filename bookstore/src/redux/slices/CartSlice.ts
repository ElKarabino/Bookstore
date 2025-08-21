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
        }
    }
})

export const { addCartItem } = CartSlice.actions
export default CartSlice.reducer