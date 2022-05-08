import { connect } from 'react-redux';

const CartCounter = ({ cartLength } )=> {
    return(    
    <li>
        <button className="button tiny ghost">
            {`Carrito ${cartLength.length}`}
        </button>
    </li>
    )
}

const mapStateToProps = state => (
    {
        cartLength: state.cartReducer.cart
    }
)

const mapDispatchToProps = dispatch => {

}

export  default connect(mapStateToProps, mapDispatchToProps)(CartCounter);