import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + "imagenes" );
    };

    return (
        <>
        {
            item.pictureUrl
            ?
            <div className="row detailContainer">
                <div className="col-lg-5 col-md-5 col-xs-12 detailImg">
                    <img src= {item.pictureUrl} className= "itemImg" />
                </div>
                <div className="col-lg-7 col-md-7 col-xs-12 detailImg">
                    <h2 className= "itemTitle">{item.title}</h2>
                    <p className= "itemDetail">{item.category}</p>
                    <p className= "itemPrice">$ {item.price}</p>
                    <p className= "itemPrice">$ {item.stock}</p>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>    
            </div>
            : <p>Cargando producto...</p>
        }
        </>
    );
};

export default ItemDetail;
