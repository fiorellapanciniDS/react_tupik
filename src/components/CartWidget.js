/* import React from "react";
import ReactDOM from "react-dom";
import { Badge } from "@mui/material";
import {ShoppingCartOutlined} from "@mui/icons-material";

const CartWidget = () => {
    return (
        <Badge badgeContent={5}color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;


 */
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