import { useDispatch } from "react-redux"
import { Book } from "../../types/Book"
import './BookItem.scss'

type BookProps = {
    book: Book,
}

export const BookItem = ({book}: BookProps) => {
    const dispatch = useDispatch();

    return (
        <li key={book.isbn13}>
            <img src={book.image} alt="book" />
            <p>{book.title}</p>
            <p>{book.price}</p>
        </li>
    )
}