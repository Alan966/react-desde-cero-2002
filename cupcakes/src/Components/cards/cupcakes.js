import { number, string} from "prop-types";

const Cupcake = ({descripcion, img, sabor, color, precio, key}) => {
    return(
        <div key={key} className="contend_cupcake">
            <img src={img} alt={sabor} className="img_cup" />
            <p className="description_cupcake">{ descripcion }</p>
            <span className="color_cupcake">color: { color }</span>
            <span className="precio_cupcake">Precio: { precio }</span>
        </div>
    )
}

   Cupcake.propTypes = {
        precio: number, 
        img: string,
        sabor: string.isRequired,
        color: string.isRequired,
        descripcion: string.isRequired
   }

   Cupcake.defaultProps = {
       precio: 0, 
         img: "https://media.istockphoto.com/photos/pink-and-white-frosted-cupcake-isolated-on-white-picture-id167120918?k=20&m=167120918&s=612x612&w=0&h=SL7pPaRbqwf-7ewyqIF_aTvhMY-qKSbShkW5BetZtsI=",
   }

export default Cupcake;