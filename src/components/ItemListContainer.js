import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory == undefined) {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, products.filter(item => item.categoryId === parseInt(idCategory)))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }

    }, []);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " imagenes.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;