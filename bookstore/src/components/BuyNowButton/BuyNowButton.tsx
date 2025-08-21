import { MouseEventHandler } from "react"

type BuyNowButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const BuyNowButton = ({ onClick }: BuyNowButtonProps) => {
    return (
        <button onClick={onClick}>Buy Now</button>
    )
}