import { createSlice } from "@reduxjs/toolkit"
import { getBookDetails, getBooks, searchBooks } from "../thunks/BooksThunk";
import { Book } from "../../types/Book";
import { BookDetails } from "../../types/BookDetails";

interface BooksState {
  booksData: Book[];
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  bookDetails: BookDetails | null;
}

const initialState: BooksState = {
    booksData: [],
    searchQuery: '',
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
        searchQuery:(state, action) => {
            state.searchQuery = action.payload;
            state.booksData = [];
            state.currentPage = 1;
        },
        setNextPage:(state) => {
            if(state.currentPage < state.totalPages) {
                state.currentPage += 1;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.fulfilled, (state, action) => {
           state.booksData = action.payload.books;
        });
        builder.addCase(getBookDetails.fulfilled, (state, action) => {
            state.bookDetails = action.payload;
        })
        builder.addCase(searchBooks.fulfilled, (state, action) => {
            if (state.currentPage === 1) {
                state.booksData = action.payload.books;
            } else {
                state.booksData = [...state.booksData, ...action.payload.books];
            }
        })
    }
})

export const { setBooks, searchQuery, setNextPage, resetBooks } = BooksSlice.actions;
export default BooksSlice.reducer 