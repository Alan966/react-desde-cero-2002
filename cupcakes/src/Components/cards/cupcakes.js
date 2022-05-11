import { number, string} from "prop-types";
// import { addToCart, deleteFromCart} from "../../redux/actionCreators";
// import { connect } from "react-redux"
// import { useContext } from "react";
// import { ADD_TO_CART, REMOVE_FROM_CART } from "../Context/Cart/actions";
// import CartContext from "../Context/Cart/CartContext";

import { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("CardStore")
@observer

class Cupcake extends Component{
    render(){

        const {descripcion, img, sabor, color, precio, id, CardStore} = this.props

        return(
            <div key={id} className="contend_cupcake">
                <img src={img} alt={sabor} className="img_cup" />
                <p className="description_cupcake">{ descripcion }</p>
                <span className="color_cupcake">color: { color }</span>
                <span className="precio_cupcake">Precio: { precio }</span>
                <div className="s-main-center">
               {
                   CardStore.cart.find(c => c === id) ? 
                     <button  
                     className="buttton--ghost-alert button--tiny" 
                     onClick={() => CardStore.removeFromCart(id)}>
                         Remover del carrito
                    </button> 
                        : 
                    <button               
                    onClick={() => CardStore.addToCart(id)}
                    className="buttton--ghost-alert button--tiny"
                    >
                        Agregar al carrito
                    </button>
               }
                </div>
            </div>
        )
    }
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

//    const mapStateToProps = state => ({
//        cart: state.cartReducer.cart
//    })

//    const mapDispatchToProps = dispatch => ({
//     addCourseToCart(id){
//         dispatch(addToCart(id))
//     }, 

//     deleteCourseFromCart(id){
//         dispatch(deleteFromCart(id))
//     }
//    })

export default Cupcake