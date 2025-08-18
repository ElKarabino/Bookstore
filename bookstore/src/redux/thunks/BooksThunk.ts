import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { Book } from "../../types/Book";
import { BookDetails } from "../../types/BookDetails";

interface BooksResponse {
    books: Book[];
    page: number;
}

export const getBooks = createAsyncThunk<BooksResponse, number>('books/getBooks', async(page) => {
    const response = await axiosInstance.get('1.0/search/mongodb', {
        params: {page}
    });
    return {
        books: response.data.books,
        page: response.data.page,
    }
})

export const getBookDetails = createAsyncThunk<BookDetails, string>('book/getBookDetails', async(isbn13) => {
    const response = await axiosInstance.get(`1.0/books/${isbn13}`)
    console.log( response.data);
    return response.data
})