import { useDispatch } from "react-redux";
import { searchBooks } from "../../redux/slices/BooksSlice";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const handleInput = (event:any) => {
        dispatch(searchBooks(event.target.value))
    }
    return (
        <input 
            placeholder="Search" 
            className="SearchInput"
            onChange={handleInput}
            />
    )
}