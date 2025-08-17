
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCartView = ({id, name, description, price, handler}) => {
    //La variable infoProduct se convertira en un objeto, formado por los argumentos que se envian desde el evento onClick del card
    const navigate = useNavigate()
    const onAddProduct = (infoProduct) => {
        handler(infoProduct)
        navigate("/cart")
    }
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <button className="btn btn-primary"
                    onClick={ () => onAddProduct( {id, name, description, price} ) }>Agregar al carrito</button>

                </div>
            </div>
        </div>
    );
}

export default ProductCartView;
