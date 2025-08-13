import { CartIcon } from "../../assets/svg/CartIcon"
import { Favorite } from "../../assets/svg/Favorite"
import { Logo } from "../../assets/svg/Logo"
import { Container } from "../Container/Container"
import './Header.scss'
import { SearchInput } from "../SearchInput/SearchInput"

export const Header = () => {
    
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