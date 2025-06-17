
export const CartApp = () => {

    return (
        <>
        
        <div className="container">
            <h1 className="m-3">Cart App</h1>
            <div className="row">
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className="card-text">$300</p>
                            <button className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className="card-text">$300</p>
                            <button className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className="card-text">$300</p>
                            <button className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className="card-text">$300</p>
                            <button className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className="card-text">$300</p>
                            <button className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico</h5>
                            <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className="card-text">$300</p>
                            <button className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4 w-50">
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
            </div>
        </div>
        </>
    )
}