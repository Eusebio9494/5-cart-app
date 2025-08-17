import { Route, Routes } from "react-router-dom";
import CartView from "./components/CartView"
import { CatalogView } from "./components/CatalogView.jsx"
import { useItemCart } from "./hooks/useItemCart.js";
import { Navbar } from "./components/Navbar.jsx";
import CartRoutes from "./routes/CartRoutes.jsx";


export const CartApp = () => {

    const { items, handlerAddProduct, handlerDeleteProduct } = useItemCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>
                <CartRoutes
                    items={items}
                    handlerAddProduct={handlerAddProduct}
                    handlerDeleteProduct={handlerDeleteProduct} />

            </div>
        </>
    )
}