import CartWidget from './CartWidget'
import './styles/NavBar.css'


function NavBar() {
     return(
           <div>
                <nav className="NavBar">
                    <ul className="navBarLista">
                        <li className="navBarItems">Inicio</li> 
                        <li className="navBarItems">Productos</li> 
                        <li className="navBarItems">Contacto</li> 
                        <CartWidget/>
                    </ul>
                </nav>
            </div>
    )
}

 export default NavBar 