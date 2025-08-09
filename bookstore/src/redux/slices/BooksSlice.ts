import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    booksData: []
}

export const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks:(state, action) => {
            return {
                ...state,
                booksData:action.payload
            }
        }
    }
})

export const { setBooks } = BooksSlice.actions;
export default BooksSlice.reducer 