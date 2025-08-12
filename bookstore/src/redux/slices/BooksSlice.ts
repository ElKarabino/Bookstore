import { createSlice } from "@reduxjs/toolkit"
import { getBooks } from "../thunks/BooksThunk";

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
    },
    extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.booksData = action.payload; // обновление
    });
  }
})

export const { setBooks } = BooksSlice.actions;
export default BooksSlice.reducer 