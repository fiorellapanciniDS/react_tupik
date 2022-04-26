import Items from "./Items";

const ItemList = ({ items })=>{
    return (
        <>
        {
            items.length > 0
            ? items.map(item => <Items key={item.id} id={item.id} title={item.name} price={item.cost} image={item.image} stock={item.stock} category={item.category} categoryId={item.categoryId}  />)
            : <p>Cargando...</p>
        }
        </>
    );
} 
export default ItemList;
