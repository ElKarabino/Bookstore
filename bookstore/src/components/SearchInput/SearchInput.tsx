import { useDispatch } from "react-redux";
import { searchBooks } from "../../redux/slices/BooksSlice";
import './SearchInput.scss'
import { SearchIcon } from "../../assets/svg/SearcIcon";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const handleInput = (event:any) => {
        dispatch(searchBooks(event.target.value))
    }
    return (
        <div className="SearchInputWrapper">
            <SearchIcon className="SearchIcon"/>
            <input 
                placeholder="Search"
                className="SearchInput"
                onChange={handleInput}
            />
        </div>
        
    )
}