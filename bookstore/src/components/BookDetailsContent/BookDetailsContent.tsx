import { Link } from "react-router-dom";
import { BookDetails } from "../../types/BookDetails";
import { BuyNowButton } from "../BuyNowButton/BuyNowButton";
import { Container } from "../Container/Container";
import './BookDetailsContent.scss'

type BookDetailsContentProps = {
    bookDetails: BookDetails;
};

export const BookDetailsContent = ({bookDetails} : BookDetailsContentProps) => {
    return (
        <div className="BookDetailsContent">
            <Container>
                <div className="BookDetailsContentBack">
                    <Link to={`/`}>
                        <p>&lt; Book Details</p>
                    </Link>
                </div>
                <div>
                    <img src={bookDetails.image} alt={bookDetails.title} />
                    <h2>{bookDetails.title}</h2>
                    <p>{bookDetails.desc}</p>
                    <p>Price: {bookDetails.price}</p>
                </div>
                <BuyNowButton />
            </Container>
        </div>
    )
}