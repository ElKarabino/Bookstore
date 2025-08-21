import { Link } from "react-router-dom";
import { BookDetails } from "../../types/BookDetails";
import { BuyNowButton } from "../BuyNowButton/BuyNowButton";
import { Container } from "../Container/Container";
import './BookDetailsContent.scss'
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slices/CartSlice";

type BookDetailsContentProps = {
    bookDetails: BookDetails;
};

export const BookDetailsContent = ({bookDetails} : BookDetailsContentProps) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addCartItem(bookDetails))
    }
    return (
        <div className="BookDetailsContent">
            <Container>
                <div className="BookDetailsContentBack">
                    <Link to={`/`}>
                        <p>&lt; Book Details</p>
                    </Link>
                </div>
                <div>
                    <div>
                        <img src={bookDetails.image} alt={bookDetails.title} />
                    </div>
                    <div>
                        <h2>{bookDetails.title}</h2>
                        <p>{bookDetails.desc}</p>
                        <p>Price: {bookDetails.price}</p>
                    </div>
                </div>
                <BuyNowButton onClick={addToCart}/>
            </Container>
        </div>
    )
}