import { useDispatch, useSelector } from "react-redux";
import { searchBooks } from "../../redux/slices/BooksSlice";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const searchTitle = useSelector((state: any) => state.books.searchTitle)
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