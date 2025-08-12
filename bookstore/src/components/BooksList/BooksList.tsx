import { useDispatch, useSelector } from "react-redux"
import { Book } from "../../types/Book";
import { useEffect } from "react";
import { getBooks } from "../../redux/thunks/BooksThunk";
import { BookItem } from "../BookItem/BookItem";
import './BooksList.scss'

export const BooksList = () => {
    const dispatch: any = useDispatch();
    const books: Book[] = useSelector((state: any) => state.books.booksData || [])
    
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])
    return (
        <ul className="BooksList">
            {books.map((book) => (
                <BookItem key = {book.isbn13} book = {book} />
            ))}
        </ul>
    )
}