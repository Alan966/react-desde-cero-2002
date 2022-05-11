// import { useContext } from "react";
// import CartContext from "../Context/Cart/CartContext";

// const CartCounter = () => {

//     const [state] = useContext(CartContext)

    
//     return(
//         <span>Carrito: { state.cart.length }</span>
//     )
// }

// export default CartCounter;


//MoBX 
import { observer, inject } from "mobx-react";
import { Component } from "react";

@inject("CardStore")
@observer 
class CartCounter extends Component{
    render(){

        return(
            <span>Carrito: 
                { this.props.CardStore.cart.length }
            </span>
        )
    }
}

export default CartCounter;