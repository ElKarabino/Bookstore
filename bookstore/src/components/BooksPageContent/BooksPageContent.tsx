import { BooksList } from "../BooksList/BooksList"
import { Container } from "../Container/Container"
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton"
import './BooksPageContent.scss'

export const BooksPageContent = () => {
    return (
        <div className="BooksPageContent">
            <Container>
                <h2 className="BooksPageContent_title">Best Seller</h2>
                <BooksList />
            </Container>
        </div>
    )
}