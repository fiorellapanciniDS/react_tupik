import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
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