import { createSlice } from "@reduxjs/toolkit"
import { getBooks } from "../thunks/BooksThunk";

const initialState = {
    booksData: [],
    searchTitle: '',
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
        },
        searchBooks:(state, action) => {
            state.searchTitle = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.booksData = action.payload; 
        });
    }
})

export const { setBooks, searchBooks } = BooksSlice.actions;
export default BooksSlice.reducer 