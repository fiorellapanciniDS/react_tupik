import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Items({ id, title, category, price, image }) {
   return (
      <div className="card col-3" id={id}>
         <img className="card-img-top" src={image} alt=""></img>
         <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{category}</p>
            <h5 className="card-subtitle">{price}</h5>
            <Link to={"/item/" + id} style={{ textDecoration: "none" }}>
               <Button variant="contained" color="secondary">
                  Ver Detalles
               </Button>
            </Link>
         </div>
      </div>
   );
}

export default Items;
