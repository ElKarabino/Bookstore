import { createSlice } from "@reduxjs/toolkit"
import { getBookDetails, getBooks } from "../thunks/BooksThunk";
import { Book } from "../../types/Book";
import { BookDetails } from "../../types/BookDetails";

interface BooksState {
  booksData: Book[];
  searchTitle: string;
  currentPage: number;
  totalPages: number;
  bookDetails: BookDetails | null;
}

const initialState: BooksState = {
    booksData: [],
    searchTitle: '',
    currentPage: 1,
    totalPages: 8,
    bookDetails: null,
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
        resetBooks:(state) => {
            state.booksData = [];
            state.currentPage = 1;
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
        builder.addCase(getBookDetails.fulfilled, (state, action) => {
            state.bookDetails = action.payload
        })
    }
})

export const { setBooks, searchBooks, setNextPage, resetBooks } = BooksSlice.actions;
export default BooksSlice.reducer 