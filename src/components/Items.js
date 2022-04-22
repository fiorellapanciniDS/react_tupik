import { red } from "@mui/material/colors";
import { color } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';

function Items({ id, title, category, price, image }) {
    return (
        <div className="card col-3" id={id}>
            <img className="card-img-top" src={image} alt =""></img>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{category}</p>
                <h5 className="card-subtitle">{price}</h5>
                <Link to='/item/:idItem'style={{textDecoration: "none"}}><button>Ver detalles</button></Link>
            </div>
        </div>
    )
}

export default Items;