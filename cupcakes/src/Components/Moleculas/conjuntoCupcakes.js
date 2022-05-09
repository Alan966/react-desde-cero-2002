import { useContext } from "react";
import Cupcake from "../cards/cupcakes";
import CoursesContext from "../Context/CoursesContext";
const ConjuntoDeCupcakes = () => {

    const {courses } = useContext(CoursesContext)

    return(
        <>
            {
                 courses ? courses.map(({img, sabor, color, precio, descripcion, id}) => {
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
            <h1>No hay cupcakes</h1>
        }
        </>
    )
}

export default ConjuntoDeCupcakes;