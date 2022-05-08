import Cupcake from "../cards/cupcakes";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux"

const Cupcakes = ({url, title, courses}) => {

    const [data , error]= useFetch(url)


   return(
    <div className="ed-grid ">
            <h1>{
                title
            }</h1>
        <section className="contend_cupcakes">
           {
               data ? data.map(({img, sabor, color, precio, descripcion, id}) => {
                   return(
                       <Cupcake 
                        img={ img}
                        sabor={ sabor} 
                        color={ color}
                        precio={ precio}
                        descripcion={ descripcion}
                        id={id}
                       />
                   )
               }) :
                <h1>Cargando...</h1>
           }
        </section>
    </div>
   )
}

const mapStateToProps = state => ({
    courses: state.coursesReducer.courses
})

export default connect(mapStateToProps, {})(Cupcakes)