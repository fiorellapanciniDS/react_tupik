import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + "imagenes" );
    };

    return (
        <>
        {
            item.image
            ?
            <div className="row detailContainer">
                <div className="col-lg-5 col-md-5 col-xs-12 detailImg">
                    <img src= {item.image[0]} className= "itemImg" />
                </div>
                <div className="col-lg-7 col-md-7 col-xs-12 detailImg">
                    <h2 className= "itemTitle">{item.name}</h2>
                    <p className= "itemDetail">Categoria: {item.category}</p>
                    <p className= "itemPrice"> Precio $ {item.cost}</p>
                    <p className= "itemPrice">Quedan {item.stock} imagenes</p>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>    
            </div>
            : <p>Cargando imagenes...</p>
        }
        </>
    );
};

export default ItemDetail;
