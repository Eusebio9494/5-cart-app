
export const getProducts = async() => {
    const response = await fetch('http://localhost:8080/products')
    const products = await response.json();
    return products;
}


export const calculateTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + (item.products.price * item.quantity),
            0);
        
}
export const calculateTotal2 = (items) => {
    return items.reduce((acc, item) => {
        return acc + (item.products.price * item.quantity);
    }, 0);
        
}