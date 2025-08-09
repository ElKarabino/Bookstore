import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axios";

export const getBooks = createAsyncThunk('books/getBooks', async() => {
    const booksData = await axiosInstance.get('1.0/search/mongodb');
    console.log(booksData.data.page)
    return booksData.data.books
})