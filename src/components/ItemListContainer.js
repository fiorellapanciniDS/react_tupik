import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = () => {
   const [datos, setDatos] = useState([]);
   const { idCategory } = useParams();

   useEffect(() => {
      firestoreFetch(idCategory)
         .then((result) => setDatos(result))
         .catch((err) => console.log(err));
   }, [idCategory]);

   useEffect(() => {
      return () => {
         setDatos([]);
      };
   }, []);

   const onAdd = (qty) => {
      alert("Seleccionaste " + qty + " imagenes.");
   };

   return (
      <>
         <div className="row detailContainer">
            <ItemList items={datos} />
         </div>
      </>
   );
};

export default ItemListContainer;
