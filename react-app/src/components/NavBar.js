import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav className="navbar barraNav">
            <h1 className="titulo">JVITECH</h1>
            <ul>
                <li>Productos</li>
                <li>Mis compras</li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default NavBar;