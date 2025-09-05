import { BookDetails } from "../../types/BookDetails";
import "./BookDetailsItem.scss"

type BookDetailsContentProps = {
    bookDetails: BookDetails;
};


export const BookDetailsItem = ({bookDetails}: BookDetailsContentProps ) => {
    return (
        <div className="BookDetailsItem">
            <div className="BookDetailsItemImg">
                <img src={bookDetails.image} alt={bookDetails.title} />
            </div>
                <div className="BookDetailsItemContent">
                    <h2 className="BookDetailsItemTitle">{bookDetails.title}</h2>
                    <p className="BookDetailsItemAuthors">{bookDetails.authors}</p>
                    <p className="BookDetailsItemSummary">Summary</p>
                    <p className="BookDetailsItemDesc">{bookDetails.desc}</p>
                </div>
        </div>
     )
}