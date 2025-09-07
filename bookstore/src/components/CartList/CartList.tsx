import { useSelector } from "react-redux"
import { CartItem } from "../CartItem/CartItem"
import "./CartList.scss"

export const CartList = () => {
    const cartItems  = useSelector((state: any)  => state.cart?.cartItems || [])
    return (
        <div className="CartList">
            {cartItems.length === 0 && <p className="CartListEmpty">Your cart is empty</p>}
            {cartItems.map((item:any) => (
                <CartItem key={item.isbn13} book={item} />
            ))}
        </div>
    )
}