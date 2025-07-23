import React from 'react';

const CartView = ( { items }) => {
    console.log("Items data:", items)
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
                        {items.map(item => (

                        <tr key={item.products.id}>
                            <td>{item.products.name}</td>
                            <td>{item.products.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.products.price}</td>
                            <td>eliminar</td>
                        </tr>
                        ))}
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
