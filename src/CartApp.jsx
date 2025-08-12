import CartView from "./components/CartView"
import { CatalogView } from "./components/CatalogView.jsx"
import {useCarItem} from "./hooks/useCarItem.js";


export const CartApp = () => {

    const { items, handlerAddProduct, handlerDeleteProduct } = useCarItem();

    return (
        <>

            <div className="container my-4">

                <h3>Cart App</h3>
                <CatalogView handler={newItem => (handlerAddProduct(newItem))} />

                <div className="my-3 w-50">

                    {items?.length <= 0 ? <p>No hay productos en el carrito</p> : <CartView items={items} handlerDeleteItem={deleteItem => (handlerDeleteProduct(deleteItem))} />}
                </div>
            </div>
        </>
    )
}