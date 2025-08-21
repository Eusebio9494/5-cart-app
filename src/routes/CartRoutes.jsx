import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CatalogView } from '../components/CatalogView';
import CartView from '../components/CartView';

const CartRoutes = ({items, handlerAddProduct, handlerDeleteProduct}) => {
    return (
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

            <Route path='/' element={
                <Navigate to={'/catalog'} />
            } />
        </Routes>
    );
}

export default CartRoutes;
