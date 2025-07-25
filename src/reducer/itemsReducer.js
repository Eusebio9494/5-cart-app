
export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'AddProduct':
            return [...state,
            {
                products: action.payload,
                quantity: 1,
            }
            ];
        case 'UpdateProduct':
            // Se usa map(inmutable) para traer el arreglo y modificarlo directamente si se cumple la condición indicada
            return state.map((i) => {
                if (i.products.id === action.payload.id) {
                    i.quantity = i.quantity + 1
                }
                // devuelve el objeto/arreglo modificado
                return i;
            });
        case 'RemoveProduct':
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