import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);//no siempre es un array vacio, puede ser uno hardcodeado
    
    const addItem = (item) => {
        setCartList([
            ...cartList,
            item
        ]);
    }

    const removeItem = (id) => {
        const result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const clear = () => {
        setCartList([]);
    }

    return (
    <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
        {children}
    </CartContext.Provider>
    );
}

export default CartContextProvider;