import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require("../utils/products");



const ItemDetailContainer = () => {
    const[datos, setDatos] = useState([]);
    console.log("products: " + products)
    
    useEffect (() => {
        customFetch (2000, products)
            .then(result => setDatos(result))
            .catch(error => console.log (error))
    }, [datos]);
    
    return (
            <ItemDetail item ={datos}/>

    );
};

export default ItemDetailContainer;