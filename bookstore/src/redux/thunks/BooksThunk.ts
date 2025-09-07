import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";
import { Book } from "../../types/Book";
import { BookDetails } from "../../types/BookDetails";


interface BooksResponse {
    books: Book[];
    page?: number;
    query?: string
}
interface SearchBooksArgs {
  query: string;
  page?: number;
}
export const getBooks = createAsyncThunk<BooksResponse>("books/getBooks", async() => {
    const response = await axiosInstance.get("new");
    return {
      books: response.data.books,
    };
  }
);

export const searchBooks = createAsyncThunk<BooksResponse, SearchBooksArgs>(
  'books/searchBooks', 
  async ({ query, page = 1 }: SearchBooksArgs) => {
    const response = await axiosInstance.get(`search/${encodeURIComponent(query)}/${page}`);
    return {
        books: response.data.books,
        page: parseInt(response.data.page),
    }
  }
);

export const getBookDetails = createAsyncThunk<BookDetails, string>('book/getBookDetails', async(isbn13) => {
    const response = await axiosInstance.get(`books/${isbn13}`)

    return response.data
})