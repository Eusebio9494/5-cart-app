import {useState } from "react";
import CartView from "./components/CartView"
import { CatalogView } from "./components/CatalogView.jsx"

const itemsProduct = [
    // {
    //     products: {
    //     id: 1,
    //     name: 'Teclado Mecanico RGB',
    //     description: 'Teclado Mecanico con luces RGB switches red',
    //     price: 1000
    // },
    //     total: 0
    //     quantity: 0
    // }
]
export const CartApp = () => {


    const [items, setItems] = useState(itemsProduct);


    const handlerAddProduct = (infoProduct) => {

        //Buscar si ya existe para no agregar un producto duplicado, y tan solo actualizar la cantidad.
        const hasItem = items.find((i) => i.products.id === infoProduct.id);
        console.log(hasItem)
        if (hasItem) {
            // //* 1a forma de actualizar
            // setItems([
            //     // Remueve del arreglo el item por actualizar
            //     ...items.filter((i) => i.products.id !== infoProduct.id),
            //     // agregando una versión del mismo producto con cantidad actualizada
            //     {
            //         products: infoProduct,
            //         quantity: hasItem.quantity + 1,
            //     }

            // ])
            //* 2a forma de actualizar
            setItems(
                // Se usa map(inmutable) para traer el arreglo y modificarlo directamente si se cumple la condición indicada
                items.map((i) => {
                    if (i.products.id === infoProduct.id) {
                        i.quantity = i.quantity + 1
                    }
                    // devuelve el objeto/arreglo modificado
                    return i;
                })
            );
        } else {
            setItems([...items,
            {
                products: infoProduct,
                quantity: 1,
            }
            ])
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

            <div className="container">

                <h3>Cart App</h3>
                <CatalogView handler={newItem => (handlerAddProduct(newItem))} />

                <div className="my-3 w-50">

                    {items?.length <= 0 ? <p>No hay productos en el carrito</p> : <CartView items={items} handlerDeleteItem={deleteItem => (handlerDeleteProduct(deleteItem))} />}
                </div>
            </div>
        </>
    )
}