import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " imagenes.");
    }

    return(  
        <>
            <p>Aca va el {props.item}</p> 
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
        );
    
    }
    
    export default ItemListContainer;