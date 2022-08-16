import React from "react";
import ItemCount from "../ItemCount";
import "../ItemDetail/ItemDetail.css"


function ItemDetail({img, nombre, desc, precio, stock}){
    return(
        <>
        <div className="cardsD">
        <div className="grid">
        <img className="itemDImg" src= {img} alt =''></img>
        <h2 className="itemDNombre">{nombre}</h2>
        <p className="desc">{desc}</p>
        <p className="itemDPrecio">${precio}</p>
        <div className="count"><ItemCount stock={stock} initial={1} /></div>
        <button className="agregarCarrito">Agregar al carrito</button>
        </div>
        </div>
        </>
    )
}

export default ItemDetail