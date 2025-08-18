        import { useDispatch, useSelector } from "react-redux";
        import { useParams } from "react-router-dom"
        import { RootState } from "../../redux/store/Store";
        import { useEffect } from "react";
        import { getBookDetails } from "../../redux/thunks/BooksThunk";
        import { Header } from "../../components/Header/Header";
        import { BookDetailsContent } from "../../components/BookDetailsContent/BookDetailsContent";

        export const BookDetailsPage = () => {
            const {isbn13} =  useParams<{ isbn13: string }>();;
            const dispatch = useDispatch<any>();
            const bookDetails = useSelector((state:RootState) => state.books.bookDetails);
            useEffect(() => {
                if(isbn13) {
                    console.log("ISBN13 from params:", isbn13);
                    dispatch(getBookDetails(isbn13))
                }
            }, [dispatch, isbn13])
            return (
                <div>
                    <Header />
                    {bookDetails && <BookDetailsContent bookDetails = {bookDetails} />}
                </div>
            )
        }