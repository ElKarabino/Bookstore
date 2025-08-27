import { useDispatch } from "react-redux"
import { clearAll } from "../../redux/slices/CartSlice";

export const ClearAllButton = () => {
    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(clearAll())
    }
    return ( 
        <button onClick={clearCart}>Clear all</button>
    )
}