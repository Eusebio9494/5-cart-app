import { products } from "../data/products";


export const getProducts = () => {
    
    return products;
}

export const calculateTotal = (items = []) => {
    return items
    .map(item => item.products.price * item.total)
    .reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
}