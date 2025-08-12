import { useDispatch } from "react-redux"
import { Book } from "../../types/Book"
import './BookItem.scss'

type BookItemProps = {
  id: string;
  title: string;
  image?: string;
  price?: string;
};

export const BookItem = ({ title, image, price, id }: BookItemProps) => {
    const dispatch = useDispatch();

    return (
        <li key={id}>
            <img src={image} alt="book" />
            <p>{title}</p>
            <p>{price}</p>
        </li>
    )
}