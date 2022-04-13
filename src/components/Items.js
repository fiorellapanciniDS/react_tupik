import React from "react";


function Items({ id, title, category, price, image }) {
    return (
        <div className="card col-3" id={id}>
            <img className="card-img-top" src={image} alt =""></img>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{category}</p>
                <h5 className="card-subtitle">{price}</h5>
            </div>
        </div>
    )
}

export default Items;