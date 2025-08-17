import { Route, Routes} from "react-router-dom";
import CartView from "./components/CartView"
import { CatalogView } from "./components/CatalogView.jsx"
import { useItemCart } from "./hooks/useItemCart.js";
import { Navbar } from "./components/Navbar.jsx";


export const CartApp = () => {

    const { items, handlerAddProduct, handlerDeleteProduct } = useItemCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>
                <Routes>
                    <Route
                        path="/catalog"
                        element={<CatalogView handler={newItem => (handlerAddProduct(newItem))} />} />

                    <Route
                        path="/cart"
                        element={
                            <div className="my-3 w-50">

                                {items?.length <= 0 ? <p>No hay productos en el carrito</p> : <CartView items={items} handlerDeleteItem={deleteItem => (handlerDeleteProduct(deleteItem))} />}
                            </div>
                        } />
                </Routes>

            </div>
        </>
    )
}