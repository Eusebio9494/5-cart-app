
import React from 'react';

const CatalogItem = ({name, description, price}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <button className="btn btn-primary">Agregar al carrito</button>

                </div>
            </div>
        </div>
    );
}

export default CatalogItem;
