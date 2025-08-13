import './BookItem.scss'

type BookItemProps = {
  key: string;
  title: string;
  image?: string;
  price?: string;
};

export const BookItem = ({ title, image, price, key }: BookItemProps) => {
     return (
        <li key={key}>
            <img src={image} alt="book" />
            <p>{title}</p>
            <p>{price}</p>
        </li>
    )
}