import { Link } from "react-router-dom";
import { BookDetails } from "../../types/BookDetails";
import { BuyNowButton } from "../BuyNowButton/BuyNowButton";
import { Container } from "../Container/Container";
import './BookDetailsPageContent.scss'
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slices/CartSlice";
import { BookDetailsItem } from "../BookDetails/BookDetailsItem";

type BookDetailsContentProps = {
    bookDetails: BookDetails;
};

export const BookDetailsPageContent = ({bookDetails} : BookDetailsContentProps) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addCartItem(bookDetails))
    }
    return (
        <div className="BookDetailsPageContent">
            <Container>
                <div className="BookDetailsPageContentBack">
                    <Link to={`/`}>
                        <p>&lt; Book Details</p>
                    </Link>
                </div>
                <BookDetailsItem bookDetails = {bookDetails}/>
                <BuyNowButton onClick={addToCart}/>
            </Container>
        </div>
    )
}