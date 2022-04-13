import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require("../utils/products");



const ItemDetailContainer = () => {
    const[datos, setDatos] = useState({});
    console.log("products: " + products)
    useEffect (() => {
        customFetch (2000, products[0])
            .then(result => setDatos(result))
            .catch(error => console.log (error))
    }, [datos]);
    
    return (
            <ItemDetail item ={products[0]}/>

    );
};

export default ItemDetailContainer;