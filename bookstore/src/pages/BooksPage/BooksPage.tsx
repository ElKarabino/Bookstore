import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getBooks } from "../../redux/thunks/BooksThunk";
import { AppDispatch } from "../../redux/store/Store";
import { Header } from "../../components/Header/Header";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { BooksPageContent } from "../../components/BooksPageContent/BooksPageContent";

export const BooksPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])
    return (
        <div>
            <Header />
            <BooksPageContent />
        </div>
    )
}