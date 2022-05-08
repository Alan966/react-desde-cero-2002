import { number, string} from "prop-types";
import { addToCart, deleteFromCart} from "../../redux/actionCreators";
import { connect } from "react-redux"

const Cupcake = ({descripcion, img, sabor, color, precio, id, addCourseToCart, deleteCourseFromCart, cart}) => {



    return(
        <div key={id} className="contend_cupcake">
            <img src={img} alt={sabor} className="img_cup" />
            <p className="description_cupcake">{ descripcion }</p>
            <span className="color_cupcake">color: { color }</span>
            <span className="precio_cupcake">Precio: { precio }</span>
            <div className="s-main-center">
                {
                    cart.find(a => a === id) ? 
                    <button
                    className="buttton--ghost-alert button-tiny"
                    onClick={() => deleteCourseFromCart(id)}
                    >Remover del carrito</button> 
                    : 
                    <button
                    className="buttton--ghost-alert button-tiny"
                    onClick={() => addCourseToCart(id)}
                    >
                            "Cupcake a la venta"
                    </button>  
                }
            </div>
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

   const mapStateToProps = state => ({
       cart: state.cartReducer.cart
   })

   const mapDispatchToProps = dispatch => ({
    addCourseToCart(id){
        dispatch(addToCart(id))
    }, 

    deleteCourseFromCart(id){
        dispatch(deleteFromCart(id))
    }
   })

export default connect(mapStateToProps,mapDispatchToProps)(Cupcake);