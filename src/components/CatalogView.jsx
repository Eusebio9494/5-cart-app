import { useEffect, useState } from "react";
import { getProducts } from "../service/getProducts";
import ProductCartView from "./ProductCartView";

export const CatalogView = ({handler}) => {

        const [products, setProducts] = useState([]);

        const findAll = async() => {
            const response = await getProducts();
            setProducts(response);
        }


    useEffect(
        () => {
            findAll();
        }, []);


    return(
        <>
        <div className="row">
                    {products.map(prod => (

                        <div className="col-4 my-2" key={prod.id}>
                            <ProductCartView 
                            id = {prod.id}
                            name={prod.name} 
                            description={prod.description} 
                            price={prod.price}
                            handler={handler}/>
                        </div>
                    ))}

                </div>
        </>
    )
}