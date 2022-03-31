import { Badge } from "@material-ui/core";
import { ShoppingCArtOutlined } from "@material-iu/icons";

const CartWidget = () => {
    return (
        <badge badgeContent={5}color="secondary">
            <shoppingCartOutlined />
        </badge>
    );
}

export default CartWidget;


