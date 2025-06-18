import React from 'react';

const CartView = () => {
    return (
        <>
                <h3>Carro de compras</h3>
                <table className="table table-hover tabler-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>eliminar</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="text-end fw-bold">Total</td>
                            <td colSpan="4" className="text-end fw-bold">12345</td>
                        </tr>

                    </tfoot>

                </table>
        </>
    );
}

export default CartView;
