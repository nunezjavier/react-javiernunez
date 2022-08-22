import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCart, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { cartContext } from "../components/store/CartContext";
import '../components/cart/Cart.css'

function CartWidget() {
    const { cart, totalAmount } = useContext(cartContext)
        return (
            <Link to={"/cart"}> 
            <FontAwesomeIcon className="cart" icon={faCartPlus} />
            {cart.length === 0 ?
            <span></span> :
            <span className="totalAmount">{totalAmount()}</span>}
            </Link>
)
}

export default CartWidget