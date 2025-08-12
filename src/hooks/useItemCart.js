import React from 'react';
import {useReducer, useState } from "react";
import { itemsReducer } from "../reducer/itemsReducer.js";
import { AddProduct, RemoveProduct, UpdateProduct } from "../Constantes/Constants.js";

//* Extrae los productos del carrito desde sessionStorage string json -> objeto
//* Si no hay productos, se inicializa como un arreglo vacío
// const itemsProduct = sessionStorage.getItem("cartItems") ? JSON.parse(sessionStorage.getItem("cartItems")) : [];
const itemsProduct = JSON.parse(sessionStorage.getItem("cartItems")) || []; 

export const useItemCart = () => {
    
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
                    type: UpdateProduct,
                    payload: infoProduct
                }
            )
        } else {
            console.log('Agregar nuevo producto')
            dispatch(
                {
                    type: AddProduct,
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
        dispatch(
            {
                type: RemoveProduct,
                payload: deleteProductId
            }
        )
    }
    
    return {
        items,
        handlerAddProduct,
        handlerDeleteProduct
    }
}
