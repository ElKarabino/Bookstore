import { useDispatch, useSelector } from "react-redux"
import { CartIcon } from "../../assets/svg/CartIcon"
import { Favorite } from "../../assets/svg/Favorite"
import { Logo } from "../../assets/svg/Logo"
import { Container } from "../Container/Container"
import './Header.scss'
import { SearchInput } from "../SearchInput/SearchInput"

export const Header = () => {
    const dispatch = useDispatch();
    const searchTitle = useSelector((state: any) => state.books.searchTitle)
    return (
        <header>
            <Container>
                <div className="HeaderWrapper">
                    <Logo />
                    <SearchInput/>
                    <div className="HeaderIconWrapper">
                        <Favorite />
                    </div>
                    <div className="HeaderIconWrapper">
                        <CartIcon />
                    </div>
                </div>
            </Container>
        </header>
    )
}