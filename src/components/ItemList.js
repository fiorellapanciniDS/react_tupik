import Items from "./Items";

const ItemList = ({items})=>{
    return (
        <>
        {
            items.length > 0
            ? items.map(item => <Items key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </>
    );
} 
export default ItemList;
