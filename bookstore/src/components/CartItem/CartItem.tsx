import { Book } from "../../types/Book";
import './CartItem.scss'

type CartItemProps = {
  book: Book;
};

export const CartItem = ({ book }: CartItemProps) => {
    return (
        <div className="CartItem">
            <div className='CartItemImage'>
                <img src={book.image} alt="book" />
            </div>
            <div className='CartItemContent'>
                <p className='CartItemContentTitle'>{book.title}</p>
                <p className='CartItemContentPrice'>{book.price}</p>
            </div>
        </div>
    )
}