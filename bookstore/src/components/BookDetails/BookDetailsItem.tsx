import { BookDetails } from "../../types/BookDetails";

type BookDetailsContentProps = {
    bookDetails: BookDetails;
};


export const BookDetailsItem = ({bookDetails}: BookDetailsContentProps ) => {
    return (
        <div className="BookDetailsItem">
            <div>
                <img src={bookDetails.image} alt={bookDetails.title} />
            </div>
                <div>
                    <h2>{bookDetails.title}</h2>
                    <p>{bookDetails.desc}</p>
                    <p>Price: {bookDetails.price}</p>
                </div>
        </div>
     )
}