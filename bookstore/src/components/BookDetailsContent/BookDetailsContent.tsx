import { BookDetails } from "../../types/BookDetails";

type BookDetailsContentProps = {
    bookDetails: BookDetails;
};

export const BookDetailsContent = ({bookDetails} : BookDetailsContentProps) => {
    return (
        <div>
            <h2>{bookDetails.title}</h2>
            <p>{bookDetails.desc}</p>
            <img src={bookDetails.image} alt={bookDetails.title} />
            <p>Price: {bookDetails.price}</p>
        </div>
    )
}