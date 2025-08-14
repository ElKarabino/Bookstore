import { Link } from 'react-router-dom';
import './BookItem.scss'

type BookItemProps = {
  key: string;
  title: string;
  image?: string;
  price?: string;
  isbn13: string;
};

export const BookItem = ({ title, image, price, isbn13 }: BookItemProps) => {
     return (
        <li className='BookItem'>
          <Link to={`/books/${isbn13}`}>
            <div className='BookItemImage'>
                <img src={image} alt="book" />
            </div>
            <div className='BookItemContent'>
                <p className='BookItemContentTitle'>{title}</p>
                <p className='BookItemContentPrice'>{price}</p>
            </div>
          </Link>
        </li>
    )
}