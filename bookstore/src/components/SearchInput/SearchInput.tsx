import { useDispatch } from "react-redux";
import { searchQuery } from "../../redux/slices/BooksSlice";
import './SearchInput.scss'
import { SearchIcon } from "../../assets/svg/SearcIcon";


export const SearchInput = () => {
    const dispatch = useDispatch();
    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchQuery(event.target.value));
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