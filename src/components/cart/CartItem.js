import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'


function CartItem({img,nombre,precio,clicks, removeItemCart,id}) {
    return (

    <div className='divCart'>
        <img className='imgCart' src={img} alt={`imagen de: ${nombre}`} ></img>
        <h2 className='nombreCart'>{nombre}</h2>
        <h3 className='precioCart'>${precio}</h3>
        <h3 className='cantCart'>Cantidad elegida: {clicks}</h3>
        <h3 className='subCart'>Subtotal: ${precio * clicks}</h3>
        <FontAwesomeIcon className='iconCart' onClick={()=> removeItemCart(id)} icon={faTrashCan}></FontAwesomeIcon>
    </div>
)
}

export default CartItem  