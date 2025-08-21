import { Book } from "../../types/Book";

type CartItemProps = {
  book: Book;
};

export const CartItem = ({ book }: CartItemProps) => {
    return (
        <div>
            <div className='BookItemImage'>
                <img src={book.image} alt="book" />
            </div>
            <div className='BookItemContent'>
                <p className='BookItemContentTitle'>{book.title}</p>
                <p className='BookItemContentPrice'>{book.price}</p>
            </div>
        </div>
    )
}