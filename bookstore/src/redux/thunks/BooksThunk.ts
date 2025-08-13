import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { Book } from "../../types/Book";

interface BooksResponse {
    books: Book[];
    page: number;
}

export const getBooks = createAsyncThunk<BooksResponse, number>('books/getBooks', async(page) => {
    const response = await axiosInstance.get('1.0/search/mongodb', {
        params: {page}
    });
    console.log(response.data.page)
    return {
        books: response.data.books,
        page: response.data.page,
    }
})