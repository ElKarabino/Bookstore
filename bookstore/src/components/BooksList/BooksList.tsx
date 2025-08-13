import { useDispatch, useSelector } from "react-redux"
import { Book } from "../../types/Book";
import { useEffect } from "react";
import { getBooks } from "../../redux/thunks/BooksThunk";
import { BookItem } from "../BookItem/BookItem";
import './BooksList.scss'
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import { RootState } from "../../redux/store/Store";
import { setNextPage } from "../../redux/slices/BooksSlice";

export const BooksList = () => {
    const dispatch: any = useDispatch();
    const {booksData, searchTitle, currentPage, totalPages} = useSelector(
        (state: RootState) => state.books
    );
    
    const searchedBooks = booksData.filter((book :Book) => 
        book.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    
    useEffect(() => {
        if (currentPage > 1) {
            dispatch(getBooks(currentPage))
        }
    }, [dispatch, currentPage])
    return (
        <>
            <ul className="BooksList">
                {searchedBooks.map((book:any) => (
                    <BookItem 
                        key={book.isbn13}
                        title={book.title}
                        image={book.image}
                        price={book.price}
                    />
                ))}
            </ul>
            {currentPage < totalPages && (
                <LoadMoreButton onClick = {() => dispatch(setNextPage())}/>
            )}
        </>
    )
}