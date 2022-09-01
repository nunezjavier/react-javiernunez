import CartItem from "./CartItem"
import { useContext } from 'react'
import { cartContext } from '../store/CartContext'
import { Link } from "react-router-dom"
import './Cart.css'
import UserForm from "../userForm/UserForm"

function Cart(id) {
    const { cart, totalAmount, removeItem, removeAll, totalPrice } = useContext(cartContext);
    function removeItemCart(){
        removeItem(id)
    }
    if (cart.length === 0) {
        return (
            <div className="divcart">
                <h2 className="tituloCart">El Carrito esta Vacio</h2>
                <Link  className="linkCart" to={"/"}>Volver al Inicio</Link>
            </div>
        )

    }
    else {
    return (
        <main className="mainCart">
        <section className="sectionCartItem">
            {cart.map((item) => {
                return (
                    <CartItem
                        key={item.id + item.nombre }
                        img={item.img}
                        nombre={item.nombre}
                        precio={item.precio}
                        clicks={item.clicks}
                        removeItemCart= {removeItemCart}

                    />
                    )
                })}
                <button onClick={removeAll}> Vaciar Carrito </button>
            </section>
            <section>      
                    <h1>Resumen del Pedido</h1>
                    <h3>Cantidad de productos: {totalAmount()} </h3>
                    <h3>Envío: Gratuito</h3>
                    <h2>Total: $ {totalPrice()}</h2>
                    <div>
                    <UserForm cart={cart}/>
                    </div>
                    <img  className="metodosImg" src="https://res.cloudinary.com/dveku4pvl/image/upload/v1661110744/mercadopago_logos1_rld5ya.jpg" alt="Metodos de Pago"></img>

            </section>
        </main>
    )
}
}

export default Cart  