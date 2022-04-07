import * as React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Wrapper } from './styledComponents';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');

const ItemListContainer = ({greeting}) => {
    const [products, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <Wrapper>{greeting}</Wrapper>
            <ItemList items={products} />
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </>
    );
}
    export default ItemListContainer;

/* 


    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " imagenes.");
    }

    return(  
        <>
            <p>Aca va el {props.item}</p> 
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
        );
    
    } */