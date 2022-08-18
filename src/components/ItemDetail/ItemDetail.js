import React from "react";
import ItemCount from "../ItemCount";
import "../ItemDetail/ItemDetail.css"
import {useState} from 'react'
import {Link} from "react-router-dom"


function ItemDetail({img, nombre, desc, precio, stock}){
    const [countCart,SetCount] = useState (0);

    function addToCart(clicks) {
        SetCount(clicks)
        console.log("Has agregado " + clicks + " de " + nombre + " al carrito")
    }
    return(
        <>
        <div className="cardsD">
        <h2 className="tituloD">Detalle del producto</h2>
        <div className="divD">
        <img className='itemDImg' src= {img} alt =''></img>
        <h2 className='itemDNombre'>{nombre}</h2>
        <p className='desc'>{desc}</p>
        <p className='itemDPrecio'>Precio: ${precio}</p>
        <div className="count">
        {countCart === 0 ? 
                    <ItemCount stock={stock} initial={1} addToCart={addToCart} /> :
                    <Link className='count' to={"/CartWidget"}>Ver Carrito</Link>}
        </div>
                    
        </div>
        </div>
        </>
    )
                }


export default ItemDetail