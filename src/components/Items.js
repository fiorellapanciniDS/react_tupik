import React from "react";


function Items({ id, title, description, price, pictureUrl }) {
    return (
        <div className="card col-3" id={id}>
            <img className="card-img-top" src={pictureUrl} alt =""></img>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <h5 className="card-subtitle">{price}</h5>
            </div>
        </div>
    )
}

export default Items;