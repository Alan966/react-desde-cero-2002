// import { Component } from "react";
import { useState, useEffect, useRef } from "react"
import "./Cupcake.css"

// Ciclo de Vida 

//Nacer , crecer, reproducirse, morir 

//Lifecycle de los componentes 

// - El componente : 

//Se va montar : ComponentWillMount() 
//Montaje : render() 
// Se ha montado: componentDidMount() 

// Se va actualizar: componentWillUpdate() 
//Montaje 
// Se ha actualizado:  componentDidUpdate 

//Se desmontara : componentWillUnmount() 



// class Cupcake extends Component{
//     constructor (props){
//         super(props); 
//         this.state = {
//             vendido: false
//         }
//         this.vender = this.vender.bind(this)
//     }

//     vender(){
//         this.setState({
//             vendido : true
//         })
//     }

//     componentWillMount(){
//         console.log("El componente se montara")
//     } 

//     componentDidMount(){
//         console.log("El componente se monto")
//     } 

//     componentWillUpdate(){
//         console.log("El componente se actualizara")
//     } 

//     componentDidUpdate(){
//         console.log("El componente se actualizo")
//         let botonVender = document.getElementById("botonVender")
//         console.log(botonVender)
//     }
        
//     render(){
//         console.log("MONTAJE!!!")
//         return(
//             <div className="cupcake" id="test">
//                 <h2 className="title_cupcake">{ this.props.color}</h2>
//                 <p className="sabor_parrafo">{`Sabor: ${this.props.sabor}`}</p>
//                 <img className="img_cupcake" src={this.props.img} alt={this.props.sabor} />
//                 <p><b>Estado : </b> { this.state.vendido ? "Vendido" : "A la venta" }</p>
//                {
//                      !this.state.vendido &&  <button id="botonVender" onClick={this.vender}>Vender</button>
//                }
//             </div>
//         )
//     }
// }




// const Cupcake = ({ color, sabor, img}) => {

// return(
//     <div className="cupcake">
//         <h2 className="title_cupcake">{ color}</h2>
//         <p className="sabor_parrafo">{`Sabor: ${sabor}`}</p>
//         <img className="img_cupcake" src={img} alt={sabor} />
//     </div>
// )
// }


const Cupcake = ({color, sabor, img }) => {

    const [vendido, setVendido] = useState(false)
    const [reservado, setReservado] = useState(false)

    const vender = () => {
        setReservado(true)
        setVendido(true)
    }

    const ref = useRef()

    const reservar = () => {
        setReservado(true)
    }

    useEffect(() => {
        if(vendido){
            ref.current.classList.add("vendido")
        }
    },[vendido])

    return(
        <div className="cupcake" id="test">
            <h2 className="title_cupcake">{ color}</h2>
            <p className="sabor_parrafo">{`Sabor: ${ sabor}`}</p>
            <img ref={ref} className="img_cupcake" src={ img } alt={ sabor } />
            <p>
                    <b>Estado : </b> 
                    { 
                        reservado ? "Reservado" : "Sin reservar" 
                    }
            </p>
                {
                    !reservado &&  <button id="botonVender" onClick={ reservar }> Reservar </button>
                }
                <p>
                    <b>Estado : </b> 
                    { 
                        vendido ? "Vendido" : "A la venta" 
                    }
                </p>
                {
                    !vendido &&  <button id="botonVender" onClick={ vender}>Vender</button>
                }
        </div>
    )
}

export default Cupcake;