
import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () => {
    const cartQty = useContext(CartContext)

    return (
        <>
            <Link to='/cart'><IconButton aria-label="cart">
                <Badge badgeContent={cartQty.calcItemsQty()} color="secondary">
                    <ShoppingCartIcon  className="botonCarrito"/>
                </Badge>
            </IconButton></Link>
        </>
    )
}
export default CartWidget;