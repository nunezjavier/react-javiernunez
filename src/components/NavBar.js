import CartWidget from "./CartWidget";
import{NavLink} from "react-router-dom"

function NavBar(){
    return(
        <nav className="navbar barraNav">
            <NavLink to={"/"}><h1 className="titulo">JVITECH</h1></NavLink>
            <ul>
                <NavLink to={"/"}><li>Productos</li></NavLink>
                <NavLink to={`category/auriculares`}><li>Auriculares</li></NavLink>
                <NavLink to={`category/netbooks`}><li>Netbooks</li></NavLink>
                <NavLink to={`category/mouse`}><li>Mouse</li></NavLink>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default NavBar;