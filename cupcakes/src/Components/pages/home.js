import { Link } from "react-router-dom"
import Servicios from "../sections/Servicios"
import Cupcakes from "./cupcakes"

const Home = () => {
    return(
    <>
    <div className="main-banner img-container dark-color">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img 
            className="main-banner__img"
            alt="banner image" 
            src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" />
          <div className="main-banner__data s-center">
            <p className="s-mb-0 t2">Bienvenido a Edcupcakes</p>
            <p>Un sitio lleno de sabor!!!</p>
            < Link className="button" target="_blank" to="/" >Ver cupcakes</Link>
          </div>
        </div>
      </div>
    </div>
    <Cupcakes 
    title={"Cupcakes de Fresa"}
    />
    <Servicios 
      url={"http://localhost:5000/servicios"}
    />
    </>
    )
}

export default Home
