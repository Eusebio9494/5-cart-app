import CartView from "./components/CartView"
import { ProductCardView } from "./components/ProductCardView"

export const CartApp = () => {



    return (
        <>

            <div className="container">

                <h3>Cart App</h3>
                <ProductCardView />

                <div className="my-3 w-50">

                    <CartView />
                </div>
            </div>
        </>
    )
}