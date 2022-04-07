import Item from "./Item";
import { ProductContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </ProductContainer>
    );
}

export default ItemList;