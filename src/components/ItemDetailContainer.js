import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const { products } = require("../utils/products");



const ItemDetailContainer = () => {
    const[datos, setDatos] = useState({});
    console.log("products: " + products)

    const { idItem } = useParams();


    useEffect (() => {
        customFetch (2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDatos(result))
            .catch(error => console.log (error))
    }, [datos]);
    
    return (
            <ItemDetail item ={datos}/>

    );
};

export default ItemDetailContainer;