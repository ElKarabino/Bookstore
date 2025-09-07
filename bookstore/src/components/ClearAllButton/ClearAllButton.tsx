import { useDispatch } from "react-redux"
import { clearAll } from "../../redux/slices/CartSlice";
import './ClearAllButton.scss'

export const ClearAllButton = () => {
    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(clearAll())
    }
    return ( 
        <button className="ClearAllButton" onClick={clearCart}>Clear all</button>
    )
}