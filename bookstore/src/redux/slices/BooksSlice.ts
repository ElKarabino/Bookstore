import { createSlice } from "@reduxjs/toolkit"
import { getBooks } from "../thunks/BooksThunk";
import { Book } from "../../types/Book";

interface BooksState {
  booksData: Book[];
  searchTitle: string;
  currentPage: number,
  totalPages: number,
}

const initialState: BooksState = {
    booksData: [],
    searchTitle: '',
    currentPage: 1,
    totalPages: 8,
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
        },
        setNextPage:(state) => {
            if(state.currentPage < state.totalPages) {
                state.currentPage += 1;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.fulfilled, (state, action) => {
           if(action.payload.page === 1) {
            state.booksData = []; 
           } else {
            state.booksData = [...state.booksData, ...action.payload.books]
           }
        });
    }
})

export const { setBooks, searchBooks, setNextPage } = BooksSlice.actions;
export default BooksSlice.reducer 