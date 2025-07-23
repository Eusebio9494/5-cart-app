import { useState } from "react";
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
        if(hasItem){
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
                    if(i.products.id === infoProduct.id){
                        i.quantity = i.quantity + 1
                    }
                    // decuelve el objeto/arreglo modificado
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


    return (
        <>

            <div className="container">

                <h3>Cart App</h3>
                <CatalogView handler={newItem => (handlerAddProduct(newItem))}/>

                <div className="my-3 w-50">

                    <CartView items = { items }/>
                </div>
            </div>
        </>
    )
}