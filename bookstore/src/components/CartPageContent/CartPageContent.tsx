import { Container } from "../Container/Container"
import "./CartPageContent.scss"
import { CartList } from "../CartList/CartList"
import { ClearAllButton } from "../ClearAllButton/ClearAllButton"

export const CartPageContent = () => {
    return (
        <div className="CartPageContent">
            <Container>
                <div className="CartPageContentWrapper">
                    <h2 className="CartPageContentTitle">Cart</h2>
                    <ClearAllButton />
                </div>
                <CartList />
            </Container>
        </div>
    )
}