import { configureStore } from "@reduxjs/toolkit";
import  BooksSliceReducer  from "../slices/BooksSlice";

export const store = configureStore({
    reducer: {
        books: BooksSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;