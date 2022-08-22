import CartItem from "./CartItem"
import { useContext } from 'react'
import { cartContext } from '../store/CartContext';

function Cart(id) {
    const { cart, addToCart, removeItem, removeAll } = useContext(cartContext);
    function removeItemCart(){
        removeItem(id)
    }
    return (
        cart.map((item) => {
            return (
                <>
                    <CartItem
                        key={item.id + item.name }
                        img={item.img}
                        nombre={item.nombre}
                        precio={item.precio}
                        clicks={item.clicks}
                        removeItemCart= {removeItemCart}

                    />
                    <button onClick={removeAll}> Vaciar Carrito </button>
                </>

            )
        })
    )
}

export default Cart  