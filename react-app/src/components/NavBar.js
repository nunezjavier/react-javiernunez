import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCart, faCartPlus} from '@fortawesome/free-solid-svg-icons'

function NavBar(){
    return(
        <nav className="navbar barraNav">
            <h1 className="titulo">JVITECH</h1>
            <ul>
                <li>Productos</li>
                <li>Mis compras</li>
                <li><FontAwesomeIcon icon = {faCartPlus}/></li>
            </ul>
        </nav>
    )
}

export default NavBar;