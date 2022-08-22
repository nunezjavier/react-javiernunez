import React from "react";
import ItemCount from "../ItemCount";
import "../ItemDetail/ItemDetail.css"
import {useState} from 'react'
import {Link} from "react-router-dom"
import { useContext } from "react";
import { cartContext } from "../store/CartContext";


function ItemDetail({data}){
    const { addToCart} = useContext(cartContext)
    const [countCart,SetCount] = useState (0);

    function onAdd(clicks) {   
        addToCart( data , clicks);
        SetCount(clicks)
        console.log("Has agregado " + data.clicks + " de " + data.nombre + " al carrito")
    }
    return(
        <>
        <div className="cardsD">
        <h2 className="tituloD">Detalle del producto</h2>
        <div className="divD">
        <img className='itemDImg' src= {data.img} alt =''></img>
        <h2 className='itemDNombre'>{data.nombre}</h2>
        <p className='desc'>{data.desc}</p>
        <p className='itemDPrecio'>Precio: ${data.precio}</p>
        <div className="count">
        {countCart === 0 ? 
                    <ItemCount stock={data.stock} initial={1} onAdd={onAdd} /> :
                    <Link className='count' to={"/cart"}>Ver Carrito</Link>}
        </div>
                    
        </div>
        </div>
        </>
    )
                }


export default ItemDetail