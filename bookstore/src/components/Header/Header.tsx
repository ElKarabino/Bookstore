import { CartIcon } from "../../assets/svg/CartIcon"
import { Favorite } from "../../assets/svg/Favorite"
import { Logo } from "../../assets/svg/Logo"
import { Container } from "../Container/Container"
import './Header.scss'
import { SearchInput } from "../SearchInput/SearchInput"
import { Link } from "react-router-dom"

export const Header = () => {
    
    return (
        <header>
            <Container>
                <div className="HeaderWrapper">
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                    <SearchInput/>
                    <div className="HeaderIconsWrapper">
                        <div className="HeaderIconWrapper">
                            <Favorite />
                        </div>
                        <div className="HeaderIconWrapper">
                        <Link to={'/cart'}>
                            <CartIcon />
                        </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}