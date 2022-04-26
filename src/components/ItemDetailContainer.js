import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";



const ItemDetailContainer = () => {
    const[datos, setDatos] = useState([]);

    const { idItem } = useParams();

    console.log(idItem);


    useEffect (() => {
        firestoreFetchOne(idItem)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    
    
    return (
            <ItemDetail item ={datos}/>

    );
};

export default ItemDetailContainer;