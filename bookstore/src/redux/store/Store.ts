import { configureStore } from "@reduxjs/toolkit";
import  BooksSliceReducer  from "../slices/BooksSlice";
import  CartSliceReducer  from "../slices/CartSlice"

export const store = configureStore({
    reducer: {
        books: BooksSliceReducer,
        cart: CartSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;