import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getBooks, searchBooks } from "../../redux/thunks/BooksThunk";
import { BookItem } from "../BookItem/BookItem";
import './BooksList.scss'
import { RootState } from "../../redux/store/Store";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import { setNextPage } from "../../redux/slices/BooksSlice";


export const BooksList = () => {
    const dispatch: any = useDispatch();
    const {booksData, searchQuery, currentPage, totalPages} = useSelector(
        (state: RootState) => state.books
    );
    
    useEffect(() => {   
        if (searchQuery) {
            dispatch(searchBooks({query: searchQuery, page: currentPage}))
        } else {
        dispatch(getBooks())
        }
    }, [dispatch, searchQuery, currentPage])

    const handleLoadMore = () => {
        dispatch(setNextPage());
    };
    return (
        <>
            <ul className="BooksList">
                {booksData.map((book:any) => (
                    <BookItem 
                        key={book.isbn13}
                        isbn13 = {book.isbn13}
                        title={book.title}
                        image={book.image}
                        price={book.price}
                    />
                ))}
            </ul>
            {currentPage < totalPages && (
                <LoadMoreButton onClick={handleLoadMore} />
            )}
        </>
    )
}