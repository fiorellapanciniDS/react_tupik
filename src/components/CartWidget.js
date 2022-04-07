import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <>
            <IconButton aria-label="cart">
                <Badge badgeContent={1} color="secondary">
                    <ShoppingCartIcon  className="botonCarrito"/>
                </Badge>
            </IconButton>
        </>
    )
}
export default CartWidget;