import { Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { ProductAmount, ProductAmountContainer } from "./styledComponents";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      setCount(initial);
   }, []);

   const increment = () => {
      if (count < stock) {
         setCount(count + 1);
      }
   };

   const decrement = () => {
      if (count > initial + 1) {
         setCount(count - 1);
      }
   };
   return (
      <ProductAmountContainer>
         <Button variant="text" onClick={increment}>
            <Add />
         </Button>
         <ProductAmount>{count}</ProductAmount>
         <Button variant="text" onClick={decrement}>
            <Remove />
         </Button>
         {stock && count ? (
            <Button
               variant="contained"
               color="secondary"
               onClick={() => onAdd(count)}
            >
               Agregar
            </Button>
         ) : (
            <Button variant="contained" disabled>
               Agregar
            </Button>
         )}
      </ProductAmountContainer>
   );
};

export default ItemCount;
