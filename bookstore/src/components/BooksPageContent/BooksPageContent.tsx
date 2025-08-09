import { BooksList } from "../BooksList/BooksList"
import { Container } from "../Container/Container"

export const BooksPageContent = () => {
    return (
        <div className="BookList">
           <Container>
                <BooksList />
           </Container>
        </div>
    )
}