import { MouseEventHandler } from "react"
import { BookDetails } from "../../types/BookDetails";
import "./BuyNowButton.scss"

type BuyNowButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    bookDetails: BookDetails;
}

export const BuyNowButton = ({ onClick, bookDetails }: BuyNowButtonProps) => {
    return (
        <div className="BuyNowButtonWrapper">
            <button className="BuyNowButton" onClick={onClick}>
                <span>{bookDetails.price}</span>
                <span>Buy Now</span>
            </button>
        </div>  
    )
}