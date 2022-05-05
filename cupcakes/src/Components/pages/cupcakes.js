import Cupcake from "../cards/cupcakes";
import useFetch from "../hooks/useFetch";

const Cupcakes = ({url, title}) => {

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
                        key={id}
                       />
                   )
               }) :
                <h1>Cargando...</h1>
           }
        </section>
    </div>
   )
}

export default Cupcakes;