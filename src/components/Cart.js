import { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
   WrapperCart,
   TitleCart,
   ContentCart,
   Product,
   ProductDetail,
   ImageCart,
   Details,
   PriceDetail,
   ProductAmountContainer,
   ProductAmount,
   ProductPrice,
   Top,
   TopText,
   Bottom,
   Info,
   Summary,
   SummaryTitle,
   SummaryItemPrice,
   SummaryItem,
   SummaryItemText,
} from "./styledComponents";
import FormatNumber from "../utils/FormatNumber";
import { collection, doc, serverTimestamp, setDoc } from "@firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
   const test = useContext(CartContext);

   const checkout = () => {
      let order = {
         buyer: {
            name: "Fio Pancini",
            email: "fio@pancini.com",
            phone: "12345678",
         },
         date: serverTimestamp(),
         items: test.cartList.map((item) => ({
            id: item.idItem,
            title: item.nameItem,
            price: item.costItem,
            qty: item.qtyItem,
         })),
         total: test.calcTotal(),
      };
      const createOrderInFirestore = async () => {
         const newOrderRef = doc(collection(db, "orders"));
         await setDoc(newOrderRef, order);
         return newOrderRef;
      };

      createOrderInFirestore()
         .then((result) => alert("Tu orden fue creada"))
         .catch((err) => console.log(err));

      test.clear();
   };

   return (
      <WrapperCart>
         <TitleCart>Mi Carrito</TitleCart>
         <Top>
            <Link to="/" style={{ textDecoration: "none" }}>
               <Button variant="contained" color="secondary">
                  Continuar comprando
               </Button>
            </Link>
            {test.cartList.length > 0 ? (
               <Button
                  variant="outlined"
                  color="secondary"
                  onClick={test.clear}
               >
                  Eliminar Todo
               </Button>
            ) : (
               <TopText>El carrito está vacio</TopText>
            )}
         </Top>
         <ContentCart>
            <Bottom>
               <Info>
                  {test.cartList.length > 0 &&
                     test.cartList.map((item) => (
                        <Product key={item.idItem}>
                           <ProductDetail>
                              <ImageCart src={item.imgItem} />
                              <Details>
                                 <span>
                                    <b>Imagen:</b> {item.nameItem}
                                 </span>
                                 <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => test.removeItem(item.idItem)}
                                 >
                                    Eliminar imagen
                                 </Button>
                              </Details>
                           </ProductDetail>
                           <PriceDetail>
                              <ProductAmountContainer>
                                 <ProductAmount>
                                    {item.qtyItem} imagen
                                 </ProductAmount>
                                 /
                                 <ProductAmount>
                                    $ {item.costItem} c/u
                                 </ProductAmount>
                              </ProductAmountContainer>
                              <ProductPrice>
                                 $ {test.calcTotalPerItem(item.idItem)}{" "}
                              </ProductPrice>
                           </PriceDetail>
                        </Product>
                     ))}
               </Info>
               {test.cartList.length > 0 && (
                  <Summary>
                     <SummaryTitle>Mi Compra</SummaryTitle>
                     <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>
                           <FormatNumber number={test.calcSubTotal()} />
                        </SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem>
                        <SummaryItemText>Impuestos</SummaryItemText>
                        <SummaryItemPrice>
                           <FormatNumber number={test.calcTaxes()} />
                        </SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem>
                        <SummaryItemText>Descuento</SummaryItemText>
                        <SummaryItemPrice>
                           <FormatNumber number="-0" />
                        </SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>
                           <FormatNumber number={test.calcTotal()} />
                        </SummaryItemPrice>
                     </SummaryItem>
                     <Button
                        variant="contained"
                        color="secondary"
                        onClick={checkout}
                     >
                        Finalizar Compra
                     </Button>
                  </Summary>
               )}
            </Bottom>
         </ContentCart>
      </WrapperCart>
   );
};

export default Cart;
