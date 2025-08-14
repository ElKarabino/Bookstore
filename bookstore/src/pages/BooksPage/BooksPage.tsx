import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getBooks } from "../../redux/thunks/BooksThunk";
import { AppDispatch } from "../../redux/store/Store";
import { Header } from "../../components/Header/Header";

import { BooksPageContent } from "../../components/BooksPageContent/BooksPageContent";
import { resetBooks } from "../../redux/slices/BooksSlice";

export const BooksPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(resetBooks());
        dispatch(getBooks(1))
    }, [dispatch])
    return (
        <div>
            <Header />
            <BooksPageContent />
        </div>
    )
}