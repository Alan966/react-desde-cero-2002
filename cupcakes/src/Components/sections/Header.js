import { NavLink } from "react-router-dom";
import CartCounter from "../Moleculas/CartCounter";
// import CartCounter from "../Atoms/CartCounter";

const Header = () => {
    return(
        <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
          <div className="s-cols-4 lg-cols-1 s-cross-center">
            <NavLink to="/" >
              <img 
              className="main-logo" 
              src="https://images.pexels.com/photos/6555489/pexels-photo-6555489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </NavLink>
          </div>
          <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu">
              <ul>
                <li><NavLink to="/" exact>Inicio</NavLink></li>
                <li><NavLink to="/cupcakes" exact >Cupcakes</NavLink></li>
                <li><NavLink to="/nosotros" exact >Nosotros</NavLink></li>
                {/* <CartCounter /> */}
                <li><CartCounter /></li>
              </ul>
            </nav>
            <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
          </div>
        </div>
      </header>
    )
}

export default Header;