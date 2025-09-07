import { BooksList } from "../BooksList/BooksList"
import { Container } from "../Container/Container"
import './BooksPageContent.scss'

export const BooksPageContent = () => {
    return (
        <div className="BooksPageContent">
            <Container>
                <h2 className="BooksPageContentTitle">Best Seller</h2>
                <BooksList />
            </Container>
        </div>
    )
}