import { AddProduct, RemoveProduct, UpdateProduct } from "../Constantes/Constants";

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case AddProduct:
            return [...state,
            {
                products: action.payload,
                quantity: 1,
            }
            ];
        case UpdateProduct:
            // Usar spread operator para no mutar el objeto original
            return state.map((i) => {
            if (i.products.id === action.payload.id) {
                return { ...i, quantity: i.quantity + 1 };
            }
            return i;
            });
        case RemoveProduct:
            return state
                .map((i) => {
                    if (i.products.id === action.payload) {
                        // Si la cantidad es mayor a 1, la reducimos
                        if (i.quantity > 1) {
                            return { ...i, quantity: i.quantity - 1 };
                        }
                        // Si la cantidad es 1, retornamos null para eliminarlo después
                        return null;
                    }
                    return i;
                })
                
                .filter(i => i !== null);

        default:
            return state;
    }
}