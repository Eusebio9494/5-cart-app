import {useReducer, useState } from "react";
import CartView from "./components/CartView"
import { CatalogView } from "./components/CatalogView.jsx"
import { itemsReducer } from "./reducer/itemsReducer.js";

//* Extrae los productos del carrito desde sessionStorage string json -> objeto
//* Si no hay productos, se inicializa como un arreglo vacío
// const itemsProduct = sessionStorage.getItem("cartItems") ? JSON.parse(sessionStorage.getItem("cartItems")) : [];
const itemsProduct = JSON.parse(sessionStorage.getItem("cartItems")) || []; 
export const CartApp = () => {


    //* Version con useState: const [items, setItems] = useState(itemsProduct);
    /* Se utiliza useReducer para manejar el estado del carrito de compras.
       itemsReducer es la función reductora que define cómo se actualiza el estado.
       itemsProduct es el estado inicial, obtenido de sessionStorage o un arreglo vacío.*/
    const [items, dispatch] = useReducer(itemsReducer, itemsProduct);


    const handlerAddProduct = (infoProduct) => {

        //Buscar si ya existe para no agregar un producto duplicado, y tan solo actualizar la cantidad.
        const hasItem = items.find((i) => i.products.id === infoProduct.id);
        console.log(hasItem)
        if (hasItem) {
            console.log('Incrementar cantidad')
            dispatch(
                {
                    type: 'UpdateProduct',
                    payload: infoProduct
                }
            )
        } else {
            console.log('Agregar nuevo producto')
            dispatch(
                {
                    type: 'AddProduct',
                    payload: infoProduct
                }
            )
        }
    }

    /**
     * Elimina un producto del carrito según su ID.
     * Si la cantidad del producto es mayor a 1, la reduce en uno.
     * Si la cantidad es 1, elimina el producto del carrito.
     *
     * El método `filter(i => i !== null)` se utiliza para eliminar los elementos que son `null` del array.
     * Esto ocurre cuando la cantidad de un producto llega a 1 y se desea eliminar completamente ese producto del carrito.
     * El método `filter` recorre el array y solo conserva los elementos que cumplen la condición (`i !== null`),
     * eliminando así los productos que han sido marcados como `null` en el paso anterior.
     *
     * @param {number|string} deleteProductId - El ID del producto a eliminar o reducir su cantidad.
     */
    const handlerDeleteProduct = (deleteProductId) => {
        setItems(
            items
                .map((i) => {
                    if (i.products.id === deleteProductId) {
                        // Si la cantidad es mayor a 1, la reducimos
                        if (i.quantity > 1) {
                            return { ...i, quantity: i.quantity - 1 };
                        }
                        // Si la cantidad es 1, retornamos null para eliminarlo después
                        return null;
                    }
                    return i;
                })
                
                .filter(i => i !== null)
        );
    }



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