import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header class="main-header">
        <div class="ed-grid s-grid-5 lg-grid-4">
          <div class="s-cols-4 lg-cols-1 s-cross-center">
            <Link to="/">
              <img 
              class="main-logo" 
              src="https://images.pexels.com/photos/6555489/pexels-photo-6555489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </Link>
          </div>
          <div class="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav class="main-menu" id="main-menu">
              <ul>
                <li><Link to="/" target="_blank">Inicio</Link></li>
                <li><Link to="/cupcakes" target="_blank">Cupcakes</Link></li>
                <li><Link to="/nosotros" target="_blank">Nosotros</Link></li>
              </ul>
            </nav>
            <div class="main-menu-toggle to-l" id="main-menu-toggle"></div>
          </div>
        </div>
      </header>
    )
}

export default Header;