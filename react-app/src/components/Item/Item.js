import React from "react"
import ItemCount from "../ItemCount"
import "../Item/Item.css"

function Item({img, nombre, precio, stock}){
    return(
        <>
        <div className="cards">
        <img className='itemImg' src= {img} alt =''></img>
        <h2 className='itemNombre'>{nombre}</h2>
        <p className='itemPrecio'>${precio}</p>
        <ItemCount stock={stock} initial={1} />
        </div>
        </>
    )
}

export default Item