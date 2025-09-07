        import { useDispatch, useSelector } from "react-redux";
        import { useParams } from "react-router-dom"
        import { RootState } from "../../redux/store/Store";
        import { useEffect } from "react";
        import { getBookDetails } from "../../redux/thunks/BooksThunk";
        import { Header } from "../../components/Header/Header";
        import { BookDetailsPageContent } from "../../components/BookDetailsContent/BookDetailsPageContent";

        export const BookDetailsPage = () => {
            const {isbn13} =  useParams<{ isbn13: string }>();;
            const dispatch = useDispatch<any>();
            const bookDetails = useSelector((state:RootState) => state.books.bookDetails);
            useEffect(() => {
                if(isbn13) {
                    dispatch(getBookDetails(isbn13))
                }
            }, [dispatch, isbn13])
            return (
                <div>
                    <Header />
                    {bookDetails && <BookDetailsPageContent bookDetails = {bookDetails} />}
                </div>
            )
        }