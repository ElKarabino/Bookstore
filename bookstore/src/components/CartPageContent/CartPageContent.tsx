import { useSelector } from "react-redux"
import { CartItem } from "../CartItem/CartItem"

export const CartPageContent = () => {
    const cartItems  = useSelector((state: any)  => state.cart?.cartItems || [])
    return (
        <div>
            {cartItems.length === 0 && <p>Empty Basket</p>}
            {cartItems.map((item:any) => (
                <CartItem key={item.isbn13} book={item} />
            ))}
        </div>
    )
}