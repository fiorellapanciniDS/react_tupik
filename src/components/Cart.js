import { useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopText } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>Mi Carrito</TitleCart>
            <Top>
            <Link to='/' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">Continuar comprando</Button></Link>
                {
                    (test.cartList.length > 0)
                    ? <Button variant="outlined" color="secondary" onClick={test.clear}>Eliminar Todo</Button>
                    : <TopText>El carrito está vacio</TopText>
                }
            </Top>
            {
                test.cartList.length > 0 && (
            
            <ContentCart>
                {
                    test.cartList.map (item =>
                        <Product>
                        <ProductDetail>
                            <ImageCart src={item.image[0]} />
                            <Details>
                            <span>
                                <b>Imagen:</b> {item.name}
                            </span>
                            <Button variant="outlined" color="secondary" onClick={() => test.removeItem(item.idItem)}>Eliminar imagen</Button>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>2 imagenes</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>Precio: ${item.cost} c/u</ProductPrice>
                        </PriceDetail>
                        </Product>
                    )
                }
            </ContentCart>
                )
            }
        </WrapperCart>
    );
}

export default Cart;